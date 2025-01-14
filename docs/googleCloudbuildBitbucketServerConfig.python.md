# `googleCloudbuildBitbucketServerConfig` Submodule <a name="`googleCloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildBitbucketServerConfig <a name="GoogleCloudbuildBitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  config_id: str,
  host_uri: str,
  location: str,
  secrets: GoogleCloudbuildBitbucketServerConfigSecrets,
  username: str,
  connected_repositories: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]] = None,
  id: str = None,
  peered_network: str = None,
  project: str = None,
  ssl_ca: str = None,
  timeouts: GoogleCloudbuildBitbucketServerConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.hostUri">host_uri</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.username">username</a></code> | <code>str</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories">connected_repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork">peered_network</a></code> | <code>str</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.sslCa">ssl_ca</a></code> | <code>str</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.apiKey"></a>

- *Type:* str

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#api_key GoogleCloudbuildBitbucketServerConfig#api_key}

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.configId"></a>

- *Type:* str

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#config_id GoogleCloudbuildBitbucketServerConfig#config_id}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.hostUri"></a>

- *Type:* str

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#host_uri GoogleCloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#location GoogleCloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.secrets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#secrets GoogleCloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.username"></a>

- *Type:* str

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#username GoogleCloudbuildBitbucketServerConfig#username}

---

##### `connected_repositories`<sup>Optional</sup> <a name="connected_repositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.connectedRepositories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#connected_repositories GoogleCloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peered_network`<sup>Optional</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.peeredNetwork"></a>

- *Type:* str

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#peered_network GoogleCloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.sslCa"></a>

- *Type:* str

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#ssl_ca GoogleCloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#timeouts GoogleCloudbuildBitbucketServerConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories">put_connected_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories">reset_connected_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork">reset_peered_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa">reset_ssl_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connected_repositories` <a name="put_connected_repositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```python
def put_connected_repositories(
  value: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets"></a>

```python
def put_secrets(
  admin_access_token_version_name: str,
  read_access_token_version_name: str,
  webhook_secret_version_name: str
) -> None
```

###### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets.parameter.adminAccessTokenVersionName"></a>

- *Type:* str

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#admin_access_token_version_name GoogleCloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

###### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets.parameter.readAccessTokenVersionName"></a>

- *Type:* str

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#read_access_token_version_name GoogleCloudbuildBitbucketServerConfig#read_access_token_version_name}

---

###### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets.parameter.webhookSecretVersionName"></a>

- *Type:* str

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#webhook_secret_version_name GoogleCloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}.

---

##### `reset_connected_repositories` <a name="reset_connected_repositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```python
def reset_connected_repositories() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_peered_network` <a name="reset_peered_network" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```python
def reset_peered_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_ssl_ca` <a name="reset_ssl_ca" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa"></a>

```python
def reset_ssl_ca() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudbuildBitbucketServerConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudbuildBitbucketServerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildBitbucketServerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories">connected_repositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey">webhook_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">connected_repositories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput">host_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput">peered_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput">secrets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput">ssl_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri">host_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork">peered_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connected_repositories`<sup>Required</sup> <a name="connected_repositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```python
connected_repositories: GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets"></a>

```python
secrets: GoogleCloudbuildBitbucketServerConfigSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `webhook_key`<sup>Required</sup> <a name="webhook_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey"></a>

```python
webhook_key: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `connected_repositories_input`<sup>Optional</sup> <a name="connected_repositories_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```python
connected_repositories_input: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---

##### `host_uri_input`<sup>Optional</sup> <a name="host_uri_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```python
host_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `peered_network_input`<sup>Optional</sup> <a name="peered_network_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```python
peered_network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput"></a>

```python
secrets_input: GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---

##### `ssl_ca_input`<sup>Optional</sup> <a name="ssl_ca_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```python
ssl_ca_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudbuildBitbucketServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ssl_ca`<sup>Required</sup> <a name="ssl_ca" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildBitbucketServerConfigConfig <a name="GoogleCloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_key: str,
  config_id: str,
  host_uri: str,
  location: str,
  secrets: GoogleCloudbuildBitbucketServerConfigSecrets,
  username: str,
  connected_repositories: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]] = None,
  id: str = None,
  peered_network: str = None,
  project: str = None,
  ssl_ca: str = None,
  timeouts: GoogleCloudbuildBitbucketServerConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey">api_key</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId">config_id</a></code> | <code>str</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri">host_uri</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location">location</a></code> | <code>str</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username">username</a></code> | <code>str</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories">connected_repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork">peered_network</a></code> | <code>str</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#api_key GoogleCloudbuildBitbucketServerConfig#api_key}

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#config_id GoogleCloudbuildBitbucketServerConfig#config_id}

---

##### `host_uri`<sup>Required</sup> <a name="host_uri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```python
host_uri: str
```

- *Type:* str

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#host_uri GoogleCloudbuildBitbucketServerConfig#host_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#location GoogleCloudbuildBitbucketServerConfig#location}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```python
secrets: GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#secrets GoogleCloudbuildBitbucketServerConfig#secrets}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#username GoogleCloudbuildBitbucketServerConfig#username}

---

##### `connected_repositories`<sup>Optional</sup> <a name="connected_repositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```python
connected_repositories: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#connected_repositories GoogleCloudbuildBitbucketServerConfig#connected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peered_network`<sup>Optional</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#peered_network GoogleCloudbuildBitbucketServerConfig#peered_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#ssl_ca GoogleCloudbuildBitbucketServerConfig#ssl_ca}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudbuildBitbucketServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#timeouts GoogleCloudbuildBitbucketServerConfig#timeouts}

---

### GoogleCloudbuildBitbucketServerConfigConnectedRepositories <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories(
  project_key: str,
  repo_slug: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">project_key</a></code> | <code>str</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">repo_slug</a></code> | <code>str</code> | Identifier for the repository. |

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#project_key GoogleCloudbuildBitbucketServerConfig#project_key}

---

##### `repo_slug`<sup>Required</sup> <a name="repo_slug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```python
repo_slug: str
```

- *Type:* str

Identifier for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#repo_slug GoogleCloudbuildBitbucketServerConfig#repo_slug}

---

### GoogleCloudbuildBitbucketServerConfigSecrets <a name="GoogleCloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets(
  admin_access_token_version_name: str,
  read_access_token_version_name: str,
  webhook_secret_version_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">admin_access_token_version_name</a></code> | <code>str</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">read_access_token_version_name</a></code> | <code>str</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">webhook_secret_version_name</a></code> | <code>str</code> | Immutable. |

---

##### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```python
admin_access_token_version_name: str
```

- *Type:* str

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#admin_access_token_version_name GoogleCloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```python
read_access_token_version_name: str
```

- *Type:* str

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#read_access_token_version_name GoogleCloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```python
webhook_secret_version_name: str
```

- *Type:* str

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#webhook_secret_version_name GoogleCloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### GoogleCloudbuildBitbucketServerConfigTimeouts <a name="GoogleCloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudbuildBitbucketServerConfigConnectedRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]]

---


### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">repo_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">repo_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `repo_slug_input`<sup>Optional</sup> <a name="repo_slug_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```python
repo_slug_input: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `repo_slug`<sup>Required</sup> <a name="repo_slug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```python
repo_slug: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudbuildBitbucketServerConfigConnectedRepositories]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories">GoogleCloudbuildBitbucketServerConfigConnectedRepositories</a>]

---


### GoogleCloudbuildBitbucketServerConfigSecretsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">admin_access_token_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">read_access_token_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">webhook_secret_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">admin_access_token_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">read_access_token_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">webhook_secret_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_access_token_version_name_input`<sup>Optional</sup> <a name="admin_access_token_version_name_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```python
admin_access_token_version_name_input: str
```

- *Type:* str

---

##### `read_access_token_version_name_input`<sup>Optional</sup> <a name="read_access_token_version_name_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```python
read_access_token_version_name_input: str
```

- *Type:* str

---

##### `webhook_secret_version_name_input`<sup>Optional</sup> <a name="webhook_secret_version_name_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```python
webhook_secret_version_name_input: str
```

- *Type:* str

---

##### `admin_access_token_version_name`<sup>Required</sup> <a name="admin_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```python
admin_access_token_version_name: str
```

- *Type:* str

---

##### `read_access_token_version_name`<sup>Required</sup> <a name="read_access_token_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```python
read_access_token_version_name: str
```

- *Type:* str

---

##### `webhook_secret_version_name`<sup>Required</sup> <a name="webhook_secret_version_name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```python
webhook_secret_version_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---


### GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_bitbucket_server_config

googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudbuildBitbucketServerConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>]

---



