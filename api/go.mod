module github.com/tektoncd/hub/api

go 1.14

require (
	github.com/Azure/azure-sdk-for-go v50.2.0+incompatible // indirect
	github.com/Azure/go-autorest/autorest v0.11.17 // indirect
	github.com/Azure/go-autorest/autorest/adal v0.9.10 // indirect
	github.com/Azure/go-autorest/autorest/to v0.4.0 // indirect
	github.com/Azure/go-autorest/autorest/validation v0.3.1 // indirect
	github.com/aws/aws-sdk-go v1.37.1 // indirect
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/docker/cli v20.10.2+incompatible // indirect
	github.com/docker/docker v20.10.2+incompatible // indirect
	github.com/emicklei/go-restful v2.15.0+incompatible // indirect
	github.com/go-gormigrate/gormigrate/v2 v2.0.0
	github.com/go-openapi/spec v0.20.2 // indirect
	github.com/go-testfixtures/testfixtures/v3 v3.2.0
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/google/go-containerregistry/pkg/authn/k8schain v0.0.0-20210129212729-5c4818de4025 // indirect
	github.com/google/go-github v17.0.0+incompatible
	github.com/google/gofuzz v1.2.0 // indirect
	github.com/googleapis/gnostic v0.5.3 // indirect
	github.com/hashicorp/go-version v1.2.0
	github.com/ikawaha/goahttpcheck v1.3.1
	github.com/joho/godotenv v1.3.0
	github.com/mitchellh/go-homedir v1.1.0
	github.com/sirupsen/logrus v1.7.0 // indirect
	github.com/spf13/cobra v1.1.1
	github.com/spf13/viper v1.7.0
	github.com/stretchr/testify v1.6.1
	github.com/tektoncd/cli v0.16.0
	github.com/tektoncd/pipeline v0.20.1
	go.uber.org/zap v1.16.0
	goa.design/goa/v3 v3.2.2
	goa.design/plugins/v3 v3.1.3
	golang.org/x/crypto v0.0.0-20201221181555-eec23a3978ad
	golang.org/x/mod v0.4.1 // indirect
	golang.org/x/oauth2 v0.0.0-20210126194326-f9ce19ea3013
	golang.org/x/term v0.0.0-20201210144234-2321bbc49cbf // indirect
	golang.org/x/time v0.0.0-20201208040808-7e3f01d25324 // indirect
	golang.org/x/tools v0.1.0 // indirect
	gopkg.in/h2non/gock.v1 v1.0.15
	gopkg.in/yaml.v3 v3.0.0-20210107192922-496545a6307b // indirect
	gorm.io/driver/postgres v1.0.2
	gorm.io/gorm v1.20.7
	gotest.tools/v3 v3.0.2
	k8s.io/api v0.19.7
	k8s.io/apimachinery v0.19.7
	k8s.io/client-go v11.0.1-0.20190805182717-6502b5e7b1b5+incompatible
	k8s.io/utils v0.0.0-20210111153108-fddb29f9d009 // indirect
	knative.dev/pkg v0.0.0-20210203171706-6045ed499615
	maze.io/x/duration v0.0.0-20160924141736-faac084b6075
)

replace k8s.io/client-go => k8s.io/client-go v0.19.7
