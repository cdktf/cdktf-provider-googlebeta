# `googleCloudfunctionsFunction` Submodule <a name="`googleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctionsFunction <a name="GoogleCloudfunctionsFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runtime: str,
  available_memory_mb: typing.Union[int, float] = None,
  build_environment_variables: typing.Mapping[str] = None,
  build_service_account: str = None,
  build_worker_pool: str = None,
  description: str = None,
  docker_registry: str = None,
  docker_repository: str = None,
  entry_point: str = None,
  environment_variables: typing.Mapping[str] = None,
  event_trigger: GoogleCloudfunctionsFunctionEventTrigger = None,
  https_trigger_security_level: str = None,
  https_trigger_url: str = None,
  id: str = None,
  ingress_settings: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  secret_environment_variables: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]] = None,
  secret_volumes: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]] = None,
  service_account_email: str = None,
  source_archive_bucket: str = None,
  source_archive_object: str = None,
  source_repository: GoogleCloudfunctionsFunctionSourceRepository = None,
  timeout: typing.Union[int, float] = None,
  timeouts: GoogleCloudfunctionsFunctionTimeouts = None,
  trigger_http: typing.Union[bool, IResolvable] = None,
  vpc_connector: str = None,
  vpc_connector_egress_settings: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.availableMemoryMb">available_memory_mb</a></code> | <code>typing.Union[int, float]</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildEnvironmentVariables">build_environment_variables</a></code> | <code>typing.Mapping[str]</code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildServiceAccount">build_service_account</a></code> | <code>str</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildWorkerPool">build_worker_pool</a></code> | <code>str</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dockerRegistry">docker_registry</a></code> | <code>str</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dockerRepository">docker_repository</a></code> | <code>str</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.entryPoint">entry_point</a></code> | <code>str</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.httpsTriggerSecurityLevel">https_trigger_security_level</a></code> | <code>str</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.httpsTriggerUrl">https_trigger_url</a></code> | <code>str</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.ingressSettings">ingress_settings</a></code> | <code>str</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.project">project</a></code> | <code>str</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.region">region</a></code> | <code>str</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.secretEnvironmentVariables">secret_environment_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.secretVolumes">secret_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceArchiveBucket">source_archive_bucket</a></code> | <code>str</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceArchiveObject">source_archive_object</a></code> | <code>str</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceRepository">source_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.triggerHttp">trigger_http</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.vpcConnector">vpc_connector</a></code> | <code>str</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.runtime"></a>

- *Type:* str

The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}

---

##### `available_memory_mb`<sup>Optional</sup> <a name="available_memory_mb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.availableMemoryMb"></a>

- *Type:* typing.Union[int, float]

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}

---

##### `build_environment_variables`<sup>Optional</sup> <a name="build_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildEnvironmentVariables"></a>

- *Type:* typing.Mapping[str]

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}

---

##### `build_service_account`<sup>Optional</sup> <a name="build_service_account" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildServiceAccount"></a>

- *Type:* str

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}

---

##### `build_worker_pool`<sup>Optional</sup> <a name="build_worker_pool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.buildWorkerPool"></a>

- *Type:* str

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.description"></a>

- *Type:* str

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}

---

##### `docker_registry`<sup>Optional</sup> <a name="docker_registry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dockerRegistry"></a>

- *Type:* str

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}

---

##### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.dockerRepository"></a>

- *Type:* str

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.entryPoint"></a>

- *Type:* str

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}

---

##### `event_trigger`<sup>Optional</sup> <a name="event_trigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.eventTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}

---

##### `https_trigger_security_level`<sup>Optional</sup> <a name="https_trigger_security_level" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.httpsTriggerSecurityLevel"></a>

- *Type:* str

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}

---

##### `https_trigger_url`<sup>Optional</sup> <a name="https_trigger_url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.httpsTriggerUrl"></a>

- *Type:* str

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.ingressSettings"></a>

- *Type:* str

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.project"></a>

- *Type:* str

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.region"></a>

- *Type:* str

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}

---

##### `secret_environment_variables`<sup>Optional</sup> <a name="secret_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.secretEnvironmentVariables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}

---

##### `secret_volumes`<sup>Optional</sup> <a name="secret_volumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.secretVolumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* str

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}

---

##### `source_archive_bucket`<sup>Optional</sup> <a name="source_archive_bucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceArchiveBucket"></a>

- *Type:* str

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}

---

##### `source_archive_object`<sup>Optional</sup> <a name="source_archive_object" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceArchiveObject"></a>

- *Type:* str

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}

---

##### `source_repository`<sup>Optional</sup> <a name="source_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.sourceRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}

---

##### `trigger_http`<sup>Optional</sup> <a name="trigger_http" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.triggerHttp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}

---

##### `vpc_connector`<sup>Optional</sup> <a name="vpc_connector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.vpcConnector"></a>

- *Type:* str

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `vpc_connector_egress_settings`<sup>Optional</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.vpcConnectorEgressSettings"></a>

- *Type:* str

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger">put_event_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables">put_secret_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes">put_secret_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository">put_source_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb">reset_available_memory_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables">reset_build_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount">reset_build_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool">reset_build_worker_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry">reset_docker_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository">reset_docker_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger">reset_event_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel">reset_https_trigger_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl">reset_https_trigger_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings">reset_ingress_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables">reset_secret_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes">reset_secret_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket">reset_source_archive_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject">reset_source_archive_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository">reset_source_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp">reset_trigger_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector">reset_vpc_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings">reset_vpc_connector_egress_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_trigger` <a name="put_event_trigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger"></a>

```python
def put_event_trigger(
  event_type: str,
  resource: str,
  failure_policy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy = None
) -> None
```

###### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.eventType"></a>

- *Type:* str

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.resource"></a>

- *Type:* str

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}

---

###### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.failurePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}

---

##### `put_secret_environment_variables` <a name="put_secret_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```python
def put_secret_environment_variables(
  value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]

---

##### `put_secret_volumes` <a name="put_secret_volumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes"></a>

```python
def put_secret_volumes(
  value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]

---

##### `put_source_repository` <a name="put_source_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository"></a>

```python
def put_source_repository(
  url: str
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository.parameter.url"></a>

- *Type:* str

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}.

---

##### `reset_available_memory_mb` <a name="reset_available_memory_mb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb"></a>

```python
def reset_available_memory_mb() -> None
```

##### `reset_build_environment_variables` <a name="reset_build_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```python
def reset_build_environment_variables() -> None
```

##### `reset_build_service_account` <a name="reset_build_service_account" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount"></a>

```python
def reset_build_service_account() -> None
```

##### `reset_build_worker_pool` <a name="reset_build_worker_pool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool"></a>

```python
def reset_build_worker_pool() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_docker_registry` <a name="reset_docker_registry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry"></a>

```python
def reset_docker_registry() -> None
```

##### `reset_docker_repository` <a name="reset_docker_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository"></a>

```python
def reset_docker_repository() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_event_trigger` <a name="reset_event_trigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger"></a>

```python
def reset_event_trigger() -> None
```

##### `reset_https_trigger_security_level` <a name="reset_https_trigger_security_level" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```python
def reset_https_trigger_security_level() -> None
```

##### `reset_https_trigger_url` <a name="reset_https_trigger_url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```python
def reset_https_trigger_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_settings` <a name="reset_ingress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings"></a>

```python
def reset_ingress_settings() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_environment_variables` <a name="reset_secret_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```python
def reset_secret_environment_variables() -> None
```

##### `reset_secret_volumes` <a name="reset_secret_volumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes"></a>

```python
def reset_secret_volumes() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_source_archive_bucket` <a name="reset_source_archive_bucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket"></a>

```python
def reset_source_archive_bucket() -> None
```

##### `reset_source_archive_object` <a name="reset_source_archive_object" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject"></a>

```python
def reset_source_archive_object() -> None
```

##### `reset_source_repository` <a name="reset_source_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository"></a>

```python
def reset_source_repository() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trigger_http` <a name="reset_trigger_http" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp"></a>

```python
def reset_trigger_http() -> None
```

##### `reset_vpc_connector` <a name="reset_vpc_connector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector"></a>

```python
def reset_vpc_connector() -> None
```

##### `reset_vpc_connector_egress_settings` <a name="reset_vpc_connector_egress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```python
def reset_vpc_connector_egress_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudfunctionsFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables">secret_environment_variables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes">secret_volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository">source_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput">available_memory_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput">build_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput">build_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput">build_worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput">docker_registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput">docker_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput">entry_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput">event_trigger_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">https_trigger_security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput">https_trigger_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput">ingress_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput">secret_environment_variables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput">secret_volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput">source_archive_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput">source_archive_object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput">source_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput">trigger_http_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">vpc_connector_egress_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput">vpc_connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb">available_memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables">build_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount">build_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool">build_worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry">docker_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository">docker_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint">entry_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">https_trigger_security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl">https_trigger_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings">ingress_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket">source_archive_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject">source_archive_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp">trigger_http</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector">vpc_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `event_trigger`<sup>Required</sup> <a name="event_trigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger"></a>

```python
event_trigger: GoogleCloudfunctionsFunctionEventTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `secret_environment_variables`<sup>Required</sup> <a name="secret_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```python
secret_environment_variables: GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `secret_volumes`<sup>Required</sup> <a name="secret_volumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes"></a>

```python
secret_volumes: GoogleCloudfunctionsFunctionSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `source_repository`<sup>Required</sup> <a name="source_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository"></a>

```python
source_repository: GoogleCloudfunctionsFunctionSourceRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts"></a>

```python
timeouts: GoogleCloudfunctionsFunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `available_memory_mb_input`<sup>Optional</sup> <a name="available_memory_mb_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput"></a>

```python
available_memory_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `build_environment_variables_input`<sup>Optional</sup> <a name="build_environment_variables_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```python
build_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_service_account_input`<sup>Optional</sup> <a name="build_service_account_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput"></a>

```python
build_service_account_input: str
```

- *Type:* str

---

##### `build_worker_pool_input`<sup>Optional</sup> <a name="build_worker_pool_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```python
build_worker_pool_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `docker_registry_input`<sup>Optional</sup> <a name="docker_registry_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput"></a>

```python
docker_registry_input: str
```

- *Type:* str

---

##### `docker_repository_input`<sup>Optional</sup> <a name="docker_repository_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput"></a>

```python
docker_repository_input: str
```

- *Type:* str

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput"></a>

```python
entry_point_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `event_trigger_input`<sup>Optional</sup> <a name="event_trigger_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput"></a>

```python
event_trigger_input: GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `https_trigger_security_level_input`<sup>Optional</sup> <a name="https_trigger_security_level_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```python
https_trigger_security_level_input: str
```

- *Type:* str

---

##### `https_trigger_url_input`<sup>Optional</sup> <a name="https_trigger_url_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```python
https_trigger_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_settings_input`<sup>Optional</sup> <a name="ingress_settings_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput"></a>

```python
ingress_settings_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `secret_environment_variables_input`<sup>Optional</sup> <a name="secret_environment_variables_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```python
secret_environment_variables_input: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]

---

##### `secret_volumes_input`<sup>Optional</sup> <a name="secret_volumes_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput"></a>

```python
secret_volumes_input: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `source_archive_bucket_input`<sup>Optional</sup> <a name="source_archive_bucket_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```python
source_archive_bucket_input: str
```

- *Type:* str

---

##### `source_archive_object_input`<sup>Optional</sup> <a name="source_archive_object_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```python
source_archive_object_input: str
```

- *Type:* str

---

##### `source_repository_input`<sup>Optional</sup> <a name="source_repository_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput"></a>

```python
source_repository_input: GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudfunctionsFunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>]

---

##### `trigger_http_input`<sup>Optional</sup> <a name="trigger_http_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput"></a>

```python
trigger_http_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_connector_egress_settings_input`<sup>Optional</sup> <a name="vpc_connector_egress_settings_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```python
vpc_connector_egress_settings_input: str
```

- *Type:* str

---

##### `vpc_connector_input`<sup>Optional</sup> <a name="vpc_connector_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput"></a>

```python
vpc_connector_input: str
```

- *Type:* str

---

##### `available_memory_mb`<sup>Required</sup> <a name="available_memory_mb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```python
available_memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `build_environment_variables`<sup>Required</sup> <a name="build_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```python
build_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_service_account`<sup>Required</sup> <a name="build_service_account" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```python
build_service_account: str
```

- *Type:* str

---

##### `build_worker_pool`<sup>Required</sup> <a name="build_worker_pool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```python
build_worker_pool: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `docker_registry`<sup>Required</sup> <a name="docker_registry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```python
docker_registry: str
```

- *Type:* str

---

##### `docker_repository`<sup>Required</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository"></a>

```python
docker_repository: str
```

- *Type:* str

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint"></a>

```python
entry_point: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `https_trigger_security_level`<sup>Required</sup> <a name="https_trigger_security_level" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```python
https_trigger_security_level: str
```

- *Type:* str

---

##### `https_trigger_url`<sup>Required</sup> <a name="https_trigger_url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```python
https_trigger_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_settings`<sup>Required</sup> <a name="ingress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings"></a>

```python
ingress_settings: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `source_archive_bucket`<sup>Required</sup> <a name="source_archive_bucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```python
source_archive_bucket: str
```

- *Type:* str

---

##### `source_archive_object`<sup>Required</sup> <a name="source_archive_object" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```python
source_archive_object: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_http`<sup>Required</sup> <a name="trigger_http" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp"></a>

```python
trigger_http: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_connector`<sup>Required</sup> <a name="vpc_connector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector"></a>

```python
vpc_connector: str
```

- *Type:* str

---

##### `vpc_connector_egress_settings`<sup>Required</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```python
vpc_connector_egress_settings: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctionsFunctionConfig <a name="GoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runtime: str,
  available_memory_mb: typing.Union[int, float] = None,
  build_environment_variables: typing.Mapping[str] = None,
  build_service_account: str = None,
  build_worker_pool: str = None,
  description: str = None,
  docker_registry: str = None,
  docker_repository: str = None,
  entry_point: str = None,
  environment_variables: typing.Mapping[str] = None,
  event_trigger: GoogleCloudfunctionsFunctionEventTrigger = None,
  https_trigger_security_level: str = None,
  https_trigger_url: str = None,
  id: str = None,
  ingress_settings: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  secret_environment_variables: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]] = None,
  secret_volumes: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]] = None,
  service_account_email: str = None,
  source_archive_bucket: str = None,
  source_archive_object: str = None,
  source_repository: GoogleCloudfunctionsFunctionSourceRepository = None,
  timeout: typing.Union[int, float] = None,
  timeouts: GoogleCloudfunctionsFunctionTimeouts = None,
  trigger_http: typing.Union[bool, IResolvable] = None,
  vpc_connector: str = None,
  vpc_connector_egress_settings: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime">runtime</a></code> | <code>str</code> | The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb">available_memory_mb</a></code> | <code>typing.Union[int, float]</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables">build_environment_variables</a></code> | <code>typing.Mapping[str]</code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount">build_service_account</a></code> | <code>str</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool">build_worker_pool</a></code> | <code>str</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description">description</a></code> | <code>str</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry">docker_registry</a></code> | <code>str</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository">docker_repository</a></code> | <code>str</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint">entry_point</a></code> | <code>str</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">https_trigger_security_level</a></code> | <code>str</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl">https_trigger_url</a></code> | <code>str</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings">ingress_settings</a></code> | <code>str</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project">project</a></code> | <code>str</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region">region</a></code> | <code>str</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables">secret_environment_variables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes">secret_volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket">source_archive_bucket</a></code> | <code>str</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject">source_archive_object</a></code> | <code>str</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository">source_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp">trigger_http</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector">vpc_connector</a></code> | <code>str</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}

---

##### `available_memory_mb`<sup>Optional</sup> <a name="available_memory_mb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```python
available_memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}

---

##### `build_environment_variables`<sup>Optional</sup> <a name="build_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```python
build_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}

---

##### `build_service_account`<sup>Optional</sup> <a name="build_service_account" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount"></a>

```python
build_service_account: str
```

- *Type:* str

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}

---

##### `build_worker_pool`<sup>Optional</sup> <a name="build_worker_pool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```python
build_worker_pool: str
```

- *Type:* str

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}

---

##### `docker_registry`<sup>Optional</sup> <a name="docker_registry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```python
docker_registry: str
```

- *Type:* str

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}

---

##### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository"></a>

```python
docker_repository: str
```

- *Type:* str

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint"></a>

```python
entry_point: str
```

- *Type:* str

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}

---

##### `event_trigger`<sup>Optional</sup> <a name="event_trigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger"></a>

```python
event_trigger: GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}

---

##### `https_trigger_security_level`<sup>Optional</sup> <a name="https_trigger_security_level" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```python
https_trigger_security_level: str
```

- *Type:* str

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}

---

##### `https_trigger_url`<sup>Optional</sup> <a name="https_trigger_url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```python
https_trigger_url: str
```

- *Type:* str

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_settings`<sup>Optional</sup> <a name="ingress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings"></a>

```python
ingress_settings: str
```

- *Type:* str

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}

---

##### `secret_environment_variables`<sup>Optional</sup> <a name="secret_environment_variables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```python
secret_environment_variables: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}

---

##### `secret_volumes`<sup>Optional</sup> <a name="secret_volumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes"></a>

```python
secret_volumes: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}

---

##### `source_archive_bucket`<sup>Optional</sup> <a name="source_archive_bucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```python
source_archive_bucket: str
```

- *Type:* str

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}

---

##### `source_archive_object`<sup>Optional</sup> <a name="source_archive_object" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```python
source_archive_object: str
```

- *Type:* str

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}

---

##### `source_repository`<sup>Optional</sup> <a name="source_repository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository"></a>

```python
source_repository: GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudfunctionsFunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}

---

##### `trigger_http`<sup>Optional</sup> <a name="trigger_http" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp"></a>

```python
trigger_http: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}

---

##### `vpc_connector`<sup>Optional</sup> <a name="vpc_connector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector"></a>

```python
vpc_connector: str
```

- *Type:* str

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `vpc_connector_egress_settings`<sup>Optional</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```python
vpc_connector_egress_settings: str
```

- *Type:* str

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}

---

### GoogleCloudfunctionsFunctionEventTrigger <a name="GoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger(
  event_type: str,
  resource: str,
  failure_policy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType">event_type</a></code> | <code>str</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource">resource</a></code> | <code>str</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource"></a>

```python
resource: str
```

- *Type:* str

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}

---

##### `failure_policy`<sup>Optional</sup> <a name="failure_policy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```python
failure_policy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}

---

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy(
  retry: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}

---

### GoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables(
  key: str,
  secret: str,
  version: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key">key</a></code> | <code>str</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret">secret</a></code> | <code>str</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version">version</a></code> | <code>str</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">project_id</a></code> | <code>str</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#key GoogleCloudfunctionsFunction#key}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```python
secret: str
```

- *Type:* str

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

### GoogleCloudfunctionsFunctionSecretVolumes <a name="GoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes(
  mount_path: str,
  secret: str,
  project_id: str = None,
  versions: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumesVersions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath">mount_path</a></code> | <code>str</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret">secret</a></code> | <code>str</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId">project_id</a></code> | <code>str</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions">versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]</code> | versions block. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#mount_path GoogleCloudfunctionsFunction#mount_path}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret"></a>

```python
secret: str
```

- *Type:* str

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions"></a>

```python
versions: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#versions GoogleCloudfunctionsFunction#versions}

---

### GoogleCloudfunctionsFunctionSecretVolumesVersions <a name="GoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions(
  path: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path">path</a></code> | <code>str</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version">version</a></code> | <code>str</code> | Version of the secret (version number or the string "latest"). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```python
path: str
```

- *Type:* str

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#path GoogleCloudfunctionsFunction#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

### GoogleCloudfunctionsFunctionSourceRepository <a name="GoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url">url</a></code> | <code>str</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url"></a>

```python
url: str
```

- *Type:* str

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}

---

### GoogleCloudfunctionsFunctionTimeouts <a name="GoogleCloudfunctionsFunctionTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">retry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">retry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry_input`<sup>Optional</sup> <a name="retry_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```python
retry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```python
retry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### GoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">put_failure_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">reset_failure_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failure_policy` <a name="put_failure_policy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```python
def put_failure_policy(
  retry: typing.Union[bool, IResolvable]
) -> None
```

###### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.retry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}

---

##### `reset_failure_policy` <a name="reset_failure_policy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```python
def reset_failure_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">failure_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```python
failure_policy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `failure_policy_input`<sup>Optional</sup> <a name="failure_policy_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```python
failure_policy_input: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretEnvironmentVariables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]]

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudfunctionsFunctionSecretEnvironmentVariables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>]

---


### GoogleCloudfunctionsFunctionSecretVolumesList <a name="GoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]]

---


### GoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">reset_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_versions` <a name="put_versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```python
def put_versions(
  value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumesVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]

---

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_versions` <a name="reset_versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```python
def reset_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```python
versions: GoogleCloudfunctionsFunctionSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```python
versions_input: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudfunctionsFunctionSecretVolumes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>]

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudfunctionsFunctionSecretVolumesVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]]

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudfunctionsFunctionSecretVolumesVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>]

---


### GoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="GoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">deployed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployed_url`<sup>Required</sup> <a name="deployed_url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```python
deployed_url: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---


### GoogleCloudfunctionsFunctionTimeoutsOutputReference <a name="GoogleCloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudfunctions_function

googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudfunctionsFunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>]

---



