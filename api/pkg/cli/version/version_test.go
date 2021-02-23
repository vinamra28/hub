// Copyright © 2021 The Tekton Authors.
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

package version

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/tektoncd/hub/api/pkg/cli/test"
	pipelinev1beta1test "github.com/tektoncd/pipeline/test"
	v1 "k8s.io/api/apps/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func TestGetPipelineVersion(t *testing.T) {
	oldDeploymentLabels := map[string]string{
		"app.kubernetes.io/component": "controller",
		"app.kubernetes.io/name":      "tekton-pipelines",
	}

	newDeploymentLabels := map[string]string{
		"app.kubernetes.io/part-of":   "tekton-pipelines",
		"app.kubernetes.io/component": "controller",
		"app.kubernetes.io/name":      "controller",
	}

	testParams := []struct {
		name                  string
		namespace             string
		userProvidedNamespace string
		deployment            *v1.Deployment
		want                  string
	}{{
		name:       "empty deployment items",
		namespace:  "tekton-pipelines",
		deployment: &v1.Deployment{},
		want:       "",
	}, {
		name:       "deployment spec does not have labels and annotations specific to version (old labels)",
		namespace:  "tekton-pipelines",
		deployment: test.GetDeploymentData("dep1", "pipeline/cmd/controller:v0.9.0@sha256:5d23", oldDeploymentLabels, nil, nil),
		want:       "v0.9.0",
	}, {
		name:       "deployment spec have annotation specific to version (old labels)",
		namespace:  "openshift-pipelines",
		deployment: test.GetDeploymentData("dep2", "", oldDeploymentLabels, nil, map[string]string{"tekton.dev/release": "v0.10.0"}),
		want:       "v0.10.0",
	}, {
		name:       "deployment spec have labels specific to version (old labels)",
		namespace:  "tekton-pipelines",
		deployment: test.GetDeploymentData("dep3", "", oldDeploymentLabels, map[string]string{"pipeline.tekton.dev/release": "v0.11.0"}, nil),
		want:       "v0.11.0",
	}, {
		name:       "deployment spec have labels specific to master version (new labels)",
		namespace:  "tekton-pipelines",
		deployment: test.GetDeploymentData("dep5", "", newDeploymentLabels, map[string]string{"app.kubernetes.io/version": "master-tekton-pipelines"}, nil),
		want:       "master-tekton-pipelines",
	}}
	for _, tp := range testParams {
		t.Run(tp.name, func(t *testing.T) {
			cs, _ := test.SeedV1beta1TestData(t, pipelinev1beta1test.Data{})

			p := test.FakeClientSet(cs.Pipeline, nil, "", cs.Kube)
			kube, err := p.KubeClient()
			if err != nil {
				t.Errorf("failed to get client: %v", err)
			}
			if _, err := kube.AppsV1().Deployments(tp.namespace).Create(context.Background(), tp.deployment, metav1.CreateOptions{}); err != nil {
				t.Errorf("failed to create deployment: %v", err)
			}
			version, _ := GetPipelineVersion(kube)
			assert.Equal(t, tp.want, version)
		})
	}
}
