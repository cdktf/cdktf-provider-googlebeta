# `googleAppEngineStandardAppVersion` Submodule <a name="`googleAppEngineStandardAppVersion` Submodule" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineStandardAppVersion <a name="GoogleAppEngineStandardAppVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment: GoogleAppEngineStandardAppVersionDeployment,
  entrypoint: GoogleAppEngineStandardAppVersionEntrypoint,
  runtime: str,
  service: str,
  app_engine_apis: typing.Union[bool, IResolvable] = None,
  automatic_scaling: GoogleAppEngineStandardAppVersionAutomaticScaling = None,
  basic_scaling: GoogleAppEngineStandardAppVersionBasicScaling = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  libraries: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]] = None,
  manual_scaling: GoogleAppEngineStandardAppVersionManualScaling = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  runtime_api_version: str = None,
  service_account: str = None,
  threadsafe: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleAppEngineStandardAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: GoogleAppEngineStandardAppVersionVpcAccessConnector = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.service">service</a></code> | <code>str</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.libraries">libraries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]</code> | libraries block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#deployment GoogleAppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.entrypoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#entrypoint GoogleAppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.runtime"></a>

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#runtime GoogleAppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.service"></a>

- *Type:* str

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#service GoogleAppEngineStandardAppVersion#service}

---

##### `app_engine_apis`<sup>Optional</sup> <a name="app_engine_apis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.appEngineApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#app_engine_apis GoogleAppEngineStandardAppVersion#app_engine_apis}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.automaticScaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#automatic_scaling GoogleAppEngineStandardAppVersion#automatic_scaling}

---

##### `basic_scaling`<sup>Optional</sup> <a name="basic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.basicScaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#basic_scaling GoogleAppEngineStandardAppVersion#basic_scaling}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.deleteServiceOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#delete_service_on_destroy GoogleAppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.envVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#env_variables GoogleAppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.handlers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#handlers GoogleAppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.inboundServices"></a>

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#inbound_services GoogleAppEngineStandardAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.instanceClass"></a>

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#instance_class GoogleAppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.libraries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#libraries GoogleAppEngineStandardAppVersion#libraries}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.manualScaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#manual_scaling GoogleAppEngineStandardAppVersion#manual_scaling}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.noopOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#noop_on_destroy GoogleAppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}.

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.runtimeApiVersion"></a>

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#runtime_api_version GoogleAppEngineStandardAppVersion#runtime_api_version}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#service_account GoogleAppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.threadsafe"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#threadsafe GoogleAppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#timeouts GoogleAppEngineStandardAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.versionId"></a>

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#version_id GoogleAppEngineStandardAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.vpcAccessConnector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#vpc_access_connector GoogleAppEngineStandardAppVersion#vpc_access_connector}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling">put_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling">put_basic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint">put_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers">put_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries">put_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling">put_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector">put_vpc_access_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis">reset_app_engine_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling">reset_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling">reset_basic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy">reset_delete_service_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables">reset_env_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers">reset_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices">reset_inbound_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass">reset_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries">reset_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling">reset_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy">reset_noop_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion">reset_runtime_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe">reset_threadsafe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId">reset_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector">reset_vpc_access_connector</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_automatic_scaling` <a name="put_automatic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling"></a>

```python
def put_automatic_scaling(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  standard_scheduler_settings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = None
) -> None
```

###### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.maxConcurrentRequests"></a>

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_concurrent_requests GoogleAppEngineStandardAppVersion#max_concurrent_requests}

---

###### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.maxIdleInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_idle_instances GoogleAppEngineStandardAppVersion#max_idle_instances}

---

###### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.maxPendingLatency"></a>

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_pending_latency GoogleAppEngineStandardAppVersion#max_pending_latency}

---

###### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.minIdleInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_idle_instances GoogleAppEngineStandardAppVersion#min_idle_instances}

---

###### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.minPendingLatency"></a>

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_pending_latency GoogleAppEngineStandardAppVersion#min_pending_latency}

---

###### `standard_scheduler_settings`<sup>Optional</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.standardSchedulerSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#standard_scheduler_settings GoogleAppEngineStandardAppVersion#standard_scheduler_settings}

---

##### `put_basic_scaling` <a name="put_basic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling"></a>

```python
def put_basic_scaling(
  max_instances: typing.Union[int, float],
  idle_timeout: str = None
) -> None
```

###### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling.parameter.idleTimeout"></a>

- *Type:* str

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#idle_timeout GoogleAppEngineStandardAppVersion#idle_timeout}

---

##### `put_deployment` <a name="put_deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment"></a>

```python
def put_deployment(
  files: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]] = None,
  zip: GoogleAppEngineStandardAppVersionDeploymentZip = None
) -> None
```

###### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment.parameter.files"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#files GoogleAppEngineStandardAppVersion#files}

---

###### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment.parameter.zip"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#zip GoogleAppEngineStandardAppVersion#zip}

---

##### `put_entrypoint` <a name="put_entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint"></a>

```python
def put_entrypoint(
  shell: str
) -> None
```

###### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint.parameter.shell"></a>

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#shell GoogleAppEngineStandardAppVersion#shell}

---

##### `put_handlers` <a name="put_handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers"></a>

```python
def put_handlers(
  value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]

---

##### `put_libraries` <a name="put_libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries"></a>

```python
def put_libraries(
  value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]

---

##### `put_manual_scaling` <a name="put_manual_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling"></a>

```python
def put_manual_scaling(
  instances: typing.Union[int, float]
) -> None
```

###### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#instances GoogleAppEngineStandardAppVersion#instances}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}.

---

##### `put_vpc_access_connector` <a name="put_vpc_access_connector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector"></a>

```python
def put_vpc_access_connector(
  name: str,
  egress_setting: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector.parameter.name"></a>

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

###### `egress_setting`<sup>Optional</sup> <a name="egress_setting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector.parameter.egressSetting"></a>

- *Type:* str

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#egress_setting GoogleAppEngineStandardAppVersion#egress_setting}

---

##### `reset_app_engine_apis` <a name="reset_app_engine_apis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis"></a>

```python
def reset_app_engine_apis() -> None
```

##### `reset_automatic_scaling` <a name="reset_automatic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling"></a>

```python
def reset_automatic_scaling() -> None
```

##### `reset_basic_scaling` <a name="reset_basic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling"></a>

```python
def reset_basic_scaling() -> None
```

##### `reset_delete_service_on_destroy` <a name="reset_delete_service_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```python
def reset_delete_service_on_destroy() -> None
```

##### `reset_env_variables` <a name="reset_env_variables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables"></a>

```python
def reset_env_variables() -> None
```

##### `reset_handlers` <a name="reset_handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers"></a>

```python
def reset_handlers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_services` <a name="reset_inbound_services" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices"></a>

```python
def reset_inbound_services() -> None
```

##### `reset_instance_class` <a name="reset_instance_class" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass"></a>

```python
def reset_instance_class() -> None
```

##### `reset_libraries` <a name="reset_libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries"></a>

```python
def reset_libraries() -> None
```

##### `reset_manual_scaling` <a name="reset_manual_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling"></a>

```python
def reset_manual_scaling() -> None
```

##### `reset_noop_on_destroy` <a name="reset_noop_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```python
def reset_noop_on_destroy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_runtime_api_version` <a name="reset_runtime_api_version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```python
def reset_runtime_api_version() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_threadsafe` <a name="reset_threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe"></a>

```python
def reset_threadsafe() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId"></a>

```python
def reset_version_id() -> None
```

##### `reset_vpc_access_connector` <a name="reset_vpc_access_connector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```python
def reset_vpc_access_connector() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAppEngineStandardAppVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries">libraries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput">app_engine_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput">automatic_scaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput">basic_scaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">delete_service_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput">deployment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput">entrypoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput">env_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput">handlers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput">inbound_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput">libraries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput">manual_scaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput">noop_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput">runtime_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput">threadsafe_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput">vpc_access_connector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automatic_scaling`<sup>Required</sup> <a name="automatic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling"></a>

```python
automatic_scaling: GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `basic_scaling`<sup>Required</sup> <a name="basic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling"></a>

```python
basic_scaling: GoogleAppEngineStandardAppVersionBasicScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment"></a>

```python
deployment: GoogleAppEngineStandardAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint"></a>

```python
entrypoint: GoogleAppEngineStandardAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers"></a>

```python
handlers: GoogleAppEngineStandardAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a>

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries"></a>

```python
libraries: GoogleAppEngineStandardAppVersionLibrariesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a>

---

##### `manual_scaling`<sup>Required</sup> <a name="manual_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling"></a>

```python
manual_scaling: GoogleAppEngineStandardAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts"></a>

```python
timeouts: GoogleAppEngineStandardAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `vpc_access_connector`<sup>Required</sup> <a name="vpc_access_connector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```python
vpc_access_connector: GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `app_engine_apis_input`<sup>Optional</sup> <a name="app_engine_apis_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput"></a>

```python
app_engine_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_scaling_input`<sup>Optional</sup> <a name="automatic_scaling_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput"></a>

```python
automatic_scaling_input: GoogleAppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---

##### `basic_scaling_input`<sup>Optional</sup> <a name="basic_scaling_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput"></a>

```python
basic_scaling_input: GoogleAppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---

##### `delete_service_on_destroy_input`<sup>Optional</sup> <a name="delete_service_on_destroy_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```python
delete_service_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput"></a>

```python
deployment_input: GoogleAppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput"></a>

```python
entrypoint_input: GoogleAppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---

##### `env_variables_input`<sup>Optional</sup> <a name="env_variables_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput"></a>

```python
env_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `handlers_input`<sup>Optional</sup> <a name="handlers_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput"></a>

```python
handlers_input: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_services_input`<sup>Optional</sup> <a name="inbound_services_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput"></a>

```python
inbound_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `libraries_input`<sup>Optional</sup> <a name="libraries_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput"></a>

```python
libraries_input: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]

---

##### `manual_scaling_input`<sup>Optional</sup> <a name="manual_scaling_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput"></a>

```python
manual_scaling_input: GoogleAppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---

##### `noop_on_destroy_input`<sup>Optional</sup> <a name="noop_on_destroy_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```python
noop_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_api_version_input`<sup>Optional</sup> <a name="runtime_api_version_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```python
runtime_api_version_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `threadsafe_input`<sup>Optional</sup> <a name="threadsafe_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput"></a>

```python
threadsafe_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAppEngineStandardAppVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `vpc_access_connector_input`<sup>Optional</sup> <a name="vpc_access_connector_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```python
vpc_access_connector_input: GoogleAppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `app_engine_apis`<sup>Required</sup> <a name="app_engine_apis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis"></a>

```python
app_engine_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_service_on_destroy`<sup>Required</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_variables`<sup>Required</sup> <a name="env_variables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbound_services`<sup>Required</sup> <a name="inbound_services" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `noop_on_destroy`<sup>Required</sup> <a name="noop_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `runtime_api_version`<sup>Required</sup> <a name="runtime_api_version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `threadsafe`<sup>Required</sup> <a name="threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe"></a>

```python
threadsafe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineStandardAppVersionAutomaticScaling <a name="GoogleAppEngineStandardAppVersionAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  standard_scheduler_settings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">standard_scheduler_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_concurrent_requests GoogleAppEngineStandardAppVersion#max_concurrent_requests}

---

##### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_idle_instances GoogleAppEngineStandardAppVersion#max_idle_instances}

---

##### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_pending_latency GoogleAppEngineStandardAppVersion#max_pending_latency}

---

##### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_idle_instances GoogleAppEngineStandardAppVersion#min_idle_instances}

---

##### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_pending_latency GoogleAppEngineStandardAppVersion#min_pending_latency}

---

##### `standard_scheduler_settings`<sup>Optional</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```python
standard_scheduler_settings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#standard_scheduler_settings GoogleAppEngineStandardAppVersion#standard_scheduler_settings}

---

### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_throughput_utilization: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">target_throughput_utilization</a></code> | <code>typing.Union[int, float]</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_instances GoogleAppEngineStandardAppVersion#min_instances}

---

##### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#target_cpu_utilization GoogleAppEngineStandardAppVersion#target_cpu_utilization}

---

##### `target_throughput_utilization`<sup>Optional</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```python
target_throughput_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#target_throughput_utilization GoogleAppEngineStandardAppVersion#target_throughput_utilization}

---

### GoogleAppEngineStandardAppVersionBasicScaling <a name="GoogleAppEngineStandardAppVersionBasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling(
  max_instances: typing.Union[int, float],
  idle_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#idle_timeout GoogleAppEngineStandardAppVersion#idle_timeout}

---

### GoogleAppEngineStandardAppVersionConfig <a name="GoogleAppEngineStandardAppVersionConfig" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment: GoogleAppEngineStandardAppVersionDeployment,
  entrypoint: GoogleAppEngineStandardAppVersionEntrypoint,
  runtime: str,
  service: str,
  app_engine_apis: typing.Union[bool, IResolvable] = None,
  automatic_scaling: GoogleAppEngineStandardAppVersionAutomaticScaling = None,
  basic_scaling: GoogleAppEngineStandardAppVersionBasicScaling = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  libraries: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]] = None,
  manual_scaling: GoogleAppEngineStandardAppVersionManualScaling = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  runtime_api_version: str = None,
  service_account: str = None,
  threadsafe: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleAppEngineStandardAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: GoogleAppEngineStandardAppVersionVpcAccessConnector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service">service</a></code> | <code>str</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries">libraries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]</code> | libraries block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment"></a>

```python
deployment: GoogleAppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#deployment GoogleAppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint"></a>

```python
entrypoint: GoogleAppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#entrypoint GoogleAppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#runtime GoogleAppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service"></a>

```python
service: str
```

- *Type:* str

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#service GoogleAppEngineStandardAppVersion#service}

---

##### `app_engine_apis`<sup>Optional</sup> <a name="app_engine_apis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```python
app_engine_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#app_engine_apis GoogleAppEngineStandardAppVersion#app_engine_apis}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```python
automatic_scaling: GoogleAppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#automatic_scaling GoogleAppEngineStandardAppVersion#automatic_scaling}

---

##### `basic_scaling`<sup>Optional</sup> <a name="basic_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling"></a>

```python
basic_scaling: GoogleAppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#basic_scaling GoogleAppEngineStandardAppVersion#basic_scaling}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#delete_service_on_destroy GoogleAppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#env_variables GoogleAppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers"></a>

```python
handlers: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#handlers GoogleAppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#inbound_services GoogleAppEngineStandardAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#instance_class GoogleAppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries"></a>

```python
libraries: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#libraries GoogleAppEngineStandardAppVersion#libraries}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling"></a>

```python
manual_scaling: GoogleAppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#manual_scaling GoogleAppEngineStandardAppVersion#manual_scaling}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#noop_on_destroy GoogleAppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}.

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#runtime_api_version GoogleAppEngineStandardAppVersion#runtime_api_version}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#service_account GoogleAppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe"></a>

```python
threadsafe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#threadsafe GoogleAppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleAppEngineStandardAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#timeouts GoogleAppEngineStandardAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#version_id GoogleAppEngineStandardAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```python
vpc_access_connector: GoogleAppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#vpc_access_connector GoogleAppEngineStandardAppVersion#vpc_access_connector}

---

### GoogleAppEngineStandardAppVersionDeployment <a name="GoogleAppEngineStandardAppVersionDeployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment(
  files: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]] = None,
  zip: GoogleAppEngineStandardAppVersionDeploymentZip = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files">files</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files"></a>

```python
files: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#files GoogleAppEngineStandardAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip"></a>

```python
zip: GoogleAppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#zip GoogleAppEngineStandardAppVersion#zip}

---

### GoogleAppEngineStandardAppVersionDeploymentFiles <a name="GoogleAppEngineStandardAppVersionDeploymentFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles(
  name: str,
  source_url: str,
  sha1_sum: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}.

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `sha1_sum`<sup>Optional</sup> <a name="sha1_sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#sha1_sum GoogleAppEngineStandardAppVersion#sha1_sum}

---

### GoogleAppEngineStandardAppVersionDeploymentZip <a name="GoogleAppEngineStandardAppVersionDeploymentZip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip(
  source_url: str,
  files_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | files count. |

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#files_count GoogleAppEngineStandardAppVersion#files_count}

---

### GoogleAppEngineStandardAppVersionEntrypoint <a name="GoogleAppEngineStandardAppVersionEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint(
  shell: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell">shell</a></code> | <code>str</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell"></a>

```python
shell: str
```

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#shell GoogleAppEngineStandardAppVersion#shell}

---

### GoogleAppEngineStandardAppVersionHandlers <a name="GoogleAppEngineStandardAppVersionHandlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers(
  auth_fail_action: str = None,
  login: str = None,
  redirect_http_response_code: str = None,
  script: GoogleAppEngineStandardAppVersionHandlersScript = None,
  security_level: str = None,
  static_files: GoogleAppEngineStandardAppVersionHandlersStaticFiles = None,
  url_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login">login</a></code> | <code>str</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel">security_level</a></code> | <code>str</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex">url_regex</a></code> | <code>str</code> | URL prefix. |

---

##### `auth_fail_action`<sup>Optional</sup> <a name="auth_fail_action" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#auth_fail_action GoogleAppEngineStandardAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login"></a>

```python
login: str
```

- *Type:* str

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#login GoogleAppEngineStandardAppVersion#login}

---

##### `redirect_http_response_code`<sup>Optional</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#redirect_http_response_code GoogleAppEngineStandardAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script"></a>

```python
script: GoogleAppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#script GoogleAppEngineStandardAppVersion#script}

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#security_level GoogleAppEngineStandardAppVersion#security_level}

---

##### `static_files`<sup>Optional</sup> <a name="static_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```python
static_files: GoogleAppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#static_files GoogleAppEngineStandardAppVersion#static_files}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#url_regex GoogleAppEngineStandardAppVersion#url_regex}

---

### GoogleAppEngineStandardAppVersionHandlersScript <a name="GoogleAppEngineStandardAppVersionHandlersScript" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript(
  script_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath">script_path</a></code> | <code>str</code> | Path to the script from the application root directory. |

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#script_path GoogleAppEngineStandardAppVersion#script_path}

---

### GoogleAppEngineStandardAppVersionHandlersStaticFiles <a name="GoogleAppEngineStandardAppVersionHandlersStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles(
  application_readable: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  http_headers: typing.Mapping[str] = None,
  mime_type: str = None,
  path: str = None,
  require_matching_file: typing.Union[bool, IResolvable] = None,
  upload_path_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>str</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">mime_type</a></code> | <code>str</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>str</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#application_readable GoogleAppEngineStandardAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#expiration GoogleAppEngineStandardAppVersion#expiration}

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#http_headers GoogleAppEngineStandardAppVersion#http_headers}

---

##### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#mime_type GoogleAppEngineStandardAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#path GoogleAppEngineStandardAppVersion#path}

---

##### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#require_matching_file GoogleAppEngineStandardAppVersion#require_matching_file}

---

##### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#upload_path_regex GoogleAppEngineStandardAppVersion#upload_path_regex}

---

### GoogleAppEngineStandardAppVersionLibraries <a name="GoogleAppEngineStandardAppVersionLibraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries(
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name">name</a></code> | <code>str</code> | Name of the library. Example "django". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version">version</a></code> | <code>str</code> | Version of the library to select, or "latest". |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#version GoogleAppEngineStandardAppVersion#version}

---

### GoogleAppEngineStandardAppVersionManualScaling <a name="GoogleAppEngineStandardAppVersionManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling(
  instances: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#instances GoogleAppEngineStandardAppVersion#instances}

---

### GoogleAppEngineStandardAppVersionTimeouts <a name="GoogleAppEngineStandardAppVersionTimeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}.

---

### GoogleAppEngineStandardAppVersionVpcAccessConnector <a name="GoogleAppEngineStandardAppVersionVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector(
  name: str,
  egress_setting: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name">name</a></code> | <code>str</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">egress_setting</a></code> | <code>str</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```python
name: str
```

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `egress_setting`<sup>Optional</sup> <a name="egress_setting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```python
egress_setting: str
```

- *Type:* str

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#egress_setting GoogleAppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">put_standard_scheduler_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">reset_max_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">reset_max_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">reset_max_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">reset_min_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">reset_min_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">reset_standard_scheduler_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_scheduler_settings` <a name="put_standard_scheduler_settings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```python
def put_standard_scheduler_settings(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_throughput_utilization: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#min_instances GoogleAppEngineStandardAppVersion#min_instances}

---

###### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.targetCpuUtilization"></a>

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#target_cpu_utilization GoogleAppEngineStandardAppVersion#target_cpu_utilization}

---

###### `target_throughput_utilization`<sup>Optional</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.targetThroughputUtilization"></a>

- *Type:* typing.Union[int, float]

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#target_throughput_utilization GoogleAppEngineStandardAppVersion#target_throughput_utilization}

---

##### `reset_max_concurrent_requests` <a name="reset_max_concurrent_requests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```python
def reset_max_concurrent_requests() -> None
```

##### `reset_max_idle_instances` <a name="reset_max_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```python
def reset_max_idle_instances() -> None
```

##### `reset_max_pending_latency` <a name="reset_max_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```python
def reset_max_pending_latency() -> None
```

##### `reset_min_idle_instances` <a name="reset_min_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```python
def reset_min_idle_instances() -> None
```

##### `reset_min_pending_latency` <a name="reset_min_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```python
def reset_min_pending_latency() -> None
```

##### `reset_standard_scheduler_settings` <a name="reset_standard_scheduler_settings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```python
def reset_standard_scheduler_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">standard_scheduler_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">max_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">max_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">max_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">min_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">min_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">standard_scheduler_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_scheduler_settings`<sup>Required</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```python
standard_scheduler_settings: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `max_concurrent_requests_input`<sup>Optional</sup> <a name="max_concurrent_requests_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```python
max_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances_input`<sup>Optional</sup> <a name="max_idle_instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```python
max_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency_input`<sup>Optional</sup> <a name="max_pending_latency_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```python
max_pending_latency_input: str
```

- *Type:* str

---

##### `min_idle_instances_input`<sup>Optional</sup> <a name="min_idle_instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```python
min_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency_input`<sup>Optional</sup> <a name="min_pending_latency_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```python
min_pending_latency_input: str
```

- *Type:* str

---

##### `standard_scheduler_settings_input`<sup>Optional</sup> <a name="standard_scheduler_settings_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```python
standard_scheduler_settings_input: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `max_concurrent_requests`<sup>Required</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances`<sup>Required</sup> <a name="max_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency`<sup>Required</sup> <a name="max_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

---

##### `min_idle_instances`<sup>Required</sup> <a name="min_idle_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency`<sup>Required</sup> <a name="min_pending_latency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---


### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">reset_target_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">reset_target_throughput_utilization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_target_cpu_utilization` <a name="reset_target_cpu_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```python
def reset_target_cpu_utilization() -> None
```

##### `reset_target_throughput_utilization` <a name="reset_target_throughput_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```python
def reset_target_throughput_utilization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">target_cpu_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">target_throughput_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">target_throughput_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization_input`<sup>Optional</sup> <a name="target_cpu_utilization_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```python
target_cpu_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_throughput_utilization_input`<sup>Optional</sup> <a name="target_throughput_utilization_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```python
target_throughput_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization`<sup>Required</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_throughput_utilization`<sup>Required</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```python
target_throughput_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### GoogleAppEngineStandardAppVersionBasicScalingOutputReference <a name="GoogleAppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---


### GoogleAppEngineStandardAppVersionDeploymentFilesList <a name="GoogleAppEngineStandardAppVersionDeploymentFilesList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]

---


### GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">reset_sha1_sum</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha1_sum` <a name="reset_sha1_sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```python
def reset_sha1_sum() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1_sum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sha1_sum_input`<sup>Optional</sup> <a name="sha1_sum_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```python
sha1_sum_input: str
```

- *Type:* str

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sha1_sum`<sup>Required</sup> <a name="sha1_sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineStandardAppVersionDeploymentFiles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]

---


### GoogleAppEngineStandardAppVersionDeploymentOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip">put_zip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles">reset_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip">reset_zip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_files` <a name="put_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```python
def put_files(
  value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]

---

##### `put_zip` <a name="put_zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```python
def put_zip(
  source_url: str,
  files_count: typing.Union[int, float] = None
) -> None
```

###### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.sourceUrl"></a>

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

###### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.filesCount"></a>

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#files_count GoogleAppEngineStandardAppVersion#files_count}

---

##### `reset_files` <a name="reset_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```python
def reset_files() -> None
```

##### `reset_zip` <a name="reset_zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```python
def reset_zip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">zip_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```python
files: GoogleAppEngineStandardAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```python
zip: GoogleAppEngineStandardAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles">GoogleAppEngineStandardAppVersionDeploymentFiles</a>]]

---

##### `zip_input`<sup>Optional</sup> <a name="zip_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```python
zip_input: GoogleAppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---


### GoogleAppEngineStandardAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">reset_files_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_files_count` <a name="reset_files_count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```python
def reset_files_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">files_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_count_input`<sup>Optional</sup> <a name="files_count_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```python
files_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `files_count`<sup>Required</sup> <a name="files_count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---


### GoogleAppEngineStandardAppVersionEntrypointOutputReference <a name="GoogleAppEngineStandardAppVersionEntrypointOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">shell_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shell_input`<sup>Optional</sup> <a name="shell_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```python
shell_input: str
```

- *Type:* str

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```python
shell: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---


### GoogleAppEngineStandardAppVersionHandlersList <a name="GoogleAppEngineStandardAppVersionHandlersList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAppEngineStandardAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]]

---


### GoogleAppEngineStandardAppVersionHandlersOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript">put_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">put_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">reset_auth_fail_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">reset_redirect_http_response_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">reset_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">reset_url_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script` <a name="put_script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```python
def put_script(
  script_path: str
) -> None
```

###### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.scriptPath"></a>

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#script_path GoogleAppEngineStandardAppVersion#script_path}

---

##### `put_static_files` <a name="put_static_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```python
def put_static_files(
  application_readable: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  http_headers: typing.Mapping[str] = None,
  mime_type: str = None,
  path: str = None,
  require_matching_file: typing.Union[bool, IResolvable] = None,
  upload_path_regex: str = None
) -> None
```

###### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.applicationReadable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#application_readable GoogleAppEngineStandardAppVersion#application_readable}

---

###### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.expiration"></a>

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#expiration GoogleAppEngineStandardAppVersion#expiration}

---

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.httpHeaders"></a>

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#http_headers GoogleAppEngineStandardAppVersion#http_headers}

---

###### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.mimeType"></a>

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#mime_type GoogleAppEngineStandardAppVersion#mime_type}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.path"></a>

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#path GoogleAppEngineStandardAppVersion#path}

---

###### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.requireMatchingFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#require_matching_file GoogleAppEngineStandardAppVersion#require_matching_file}

---

###### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.uploadPathRegex"></a>

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_app_engine_standard_app_version#upload_path_regex GoogleAppEngineStandardAppVersion#upload_path_regex}

---

##### `reset_auth_fail_action` <a name="reset_auth_fail_action" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```python
def reset_auth_fail_action() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_redirect_http_response_code` <a name="reset_redirect_http_response_code" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```python
def reset_redirect_http_response_code() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_static_files` <a name="reset_static_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```python
def reset_static_files() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">auth_fail_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirect_http_response_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">script_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">static_files_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```python
script: GoogleAppEngineStandardAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `static_files`<sup>Required</sup> <a name="static_files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```python
static_files: GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `auth_fail_action_input`<sup>Optional</sup> <a name="auth_fail_action_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```python
auth_fail_action_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `redirect_http_response_code_input`<sup>Optional</sup> <a name="redirect_http_response_code_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```python
redirect_http_response_code_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```python
script_input: GoogleAppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `static_files_input`<sup>Optional</sup> <a name="static_files_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```python
static_files_input: GoogleAppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `auth_fail_action`<sup>Required</sup> <a name="auth_fail_action" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `redirect_http_response_code`<sup>Required</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineStandardAppVersionHandlers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers">GoogleAppEngineStandardAppVersionHandlers</a>]

---


### GoogleAppEngineStandardAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_path_input`<sup>Optional</sup> <a name="script_path_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```python
script_path_input: str
```

- *Type:* str

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---


### GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">reset_application_readable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">reset_mime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">reset_require_matching_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">reset_upload_path_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_readable` <a name="reset_application_readable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```python
def reset_application_readable() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_mime_type` <a name="reset_mime_type" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```python
def reset_mime_type() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_require_matching_file` <a name="reset_require_matching_file" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```python
def reset_require_matching_file() -> None
```

##### `reset_upload_path_regex` <a name="reset_upload_path_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```python
def reset_upload_path_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">application_readable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">require_matching_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">upload_path_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_readable_input`<sup>Optional</sup> <a name="application_readable_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```python
application_readable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `require_matching_file_input`<sup>Optional</sup> <a name="require_matching_file_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```python
require_matching_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex_input`<sup>Optional</sup> <a name="upload_path_regex_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```python
upload_path_regex_input: str
```

- *Type:* str

---

##### `application_readable`<sup>Required</sup> <a name="application_readable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_matching_file`<sup>Required</sup> <a name="require_matching_file" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex`<sup>Required</sup> <a name="upload_path_regex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineStandardAppVersionLibrariesList <a name="GoogleAppEngineStandardAppVersionLibrariesList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAppEngineStandardAppVersionLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]]

---


### GoogleAppEngineStandardAppVersionLibrariesOutputReference <a name="GoogleAppEngineStandardAppVersionLibrariesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineStandardAppVersionLibraries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries">GoogleAppEngineStandardAppVersionLibraries</a>]

---


### GoogleAppEngineStandardAppVersionManualScalingOutputReference <a name="GoogleAppEngineStandardAppVersionManualScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---


### GoogleAppEngineStandardAppVersionTimeoutsOutputReference <a name="GoogleAppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAppEngineStandardAppVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>]

---


### GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_app_engine_standard_app_version

googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">reset_egress_setting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_egress_setting` <a name="reset_egress_setting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```python
def reset_egress_setting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">egress_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">egress_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_setting_input`<sup>Optional</sup> <a name="egress_setting_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```python
egress_setting_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `egress_setting`<sup>Required</sup> <a name="egress_setting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```python
egress_setting: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---



