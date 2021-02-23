// Copyright © 2020 The Tekton Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package test

import (
	"context"
	"fmt"
	"testing"

	ttesting "github.com/tektoncd/pipeline/pkg/reconciler/testing"
	pipelinev1beta1test "github.com/tektoncd/pipeline/test"
	v1 "k8s.io/api/apps/v1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	k8s "k8s.io/client-go/kubernetes"
)

func SeedV1beta1TestData(t *testing.T, d pipelinev1beta1test.Data) (pipelinev1beta1test.Clients, pipelinev1beta1test.Informers) {
	ctx, _ := ttesting.SetupFakeContext(t)
	return pipelinev1beta1test.SeedTestData(t, ctx, d)
}

func GetDeploymentData(name, image string, deploymentLabels, podTemplateLabels, annotations map[string]string) *v1.Deployment {
	return &v1.Deployment{
		TypeMeta: metav1.TypeMeta{},
		ObjectMeta: metav1.ObjectMeta{
			Name:   name,
			Labels: deploymentLabels,
		},
		Spec: v1.DeploymentSpec{
			Template: corev1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Labels:      podTemplateLabels,
					Annotations: annotations,
				},
				Spec: corev1.PodSpec{
					Containers: []corev1.Container{{
						Image: image,
					}},
				},
			},
		},
	}
}

func CreateTektonPipelineController(kube k8s.Interface, version string) error {
	newDeploymentLabels := map[string]string{
		"app.kubernetes.io/part-of":   "tekton-pipelines",
		"app.kubernetes.io/component": "controller",
		"app.kubernetes.io/name":      "controller",
	}

	deployment := GetDeploymentData("test", "", newDeploymentLabels, map[string]string{"app.kubernetes.io/version": version}, nil)

	if _, err := kube.AppsV1().Deployments("tekton-pipelines").Create(context.Background(), deployment, metav1.CreateOptions{}); err != nil {
		return fmt.Errorf("failed to create deployment: %v", err)
	}
	return nil
}
