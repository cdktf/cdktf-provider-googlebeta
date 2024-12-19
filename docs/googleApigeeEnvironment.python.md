# `googleApigeeEnvironment` Submodule <a name="`googleApigeeEnvironment` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironment <a name="GoogleApigeeEnvironment" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment google_apigee_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironment(
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
  org_id: str,
  api_proxy_type: str = None,
  deployment_type: str = None,
  description: str = None,
  display_name: str = None,
  forward_proxy_uri: str = None,
  id: str = None,
  node_config: GoogleApigeeEnvironmentNodeConfig = None,
  timeouts: GoogleApigeeEnvironmentTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.apiProxyType">api_proxy_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.type">type</a></code> | <code>str</code> | Types that can be selected for an Environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#org_id GoogleApigeeEnvironment#org_id}

---

##### `api_proxy_type`<sup>Optional</sup> <a name="api_proxy_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.apiProxyType"></a>

- *Type:* str

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#api_proxy_type GoogleApigeeEnvironment#api_proxy_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.deploymentType"></a>

- *Type:* str

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#deployment_type GoogleApigeeEnvironment#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#description GoogleApigeeEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#display_name GoogleApigeeEnvironment#display_name}

---

##### `forward_proxy_uri`<sup>Optional</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.forwardProxyUri"></a>

- *Type:* str

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#forward_proxy_uri GoogleApigeeEnvironment#forward_proxy_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#node_config GoogleApigeeEnvironment#node_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#timeouts GoogleApigeeEnvironment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.Initializer.parameter.type"></a>

- *Type:* str

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#type GoogleApigeeEnvironment#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetApiProxyType">reset_api_proxy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetForwardProxyUri">reset_forward_proxy_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig"></a>

```python
def put_node_config(
  max_node_count: str = None,
  min_node_count: str = None
) -> None
```

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig.parameter.maxNodeCount"></a>

- *Type:* str

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#max_node_count GoogleApigeeEnvironment#max_node_count}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putNodeConfig.parameter.minNodeCount"></a>

- *Type:* str

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#min_node_count GoogleApigeeEnvironment#min_node_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}.

---

##### `reset_api_proxy_type` <a name="reset_api_proxy_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetApiProxyType"></a>

```python
def reset_api_proxy_type() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_forward_proxy_uri` <a name="reset_forward_proxy_uri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetForwardProxyUri"></a>

```python
def reset_forward_proxy_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference">GoogleApigeeEnvironmentNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference">GoogleApigeeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyTypeInput">api_proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUriInput">forward_proxy_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyType">api_proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfig"></a>

```python
node_config: GoogleApigeeEnvironmentNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference">GoogleApigeeEnvironmentNodeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference">GoogleApigeeEnvironmentTimeoutsOutputReference</a>

---

##### `api_proxy_type_input`<sup>Optional</sup> <a name="api_proxy_type_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyTypeInput"></a>

```python
api_proxy_type_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `forward_proxy_uri_input`<sup>Optional</sup> <a name="forward_proxy_uri_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUriInput"></a>

```python
forward_proxy_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.nodeConfigInput"></a>

```python
node_config_input: GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `api_proxy_type`<sup>Required</sup> <a name="api_proxy_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.apiProxyType"></a>

```python
api_proxy_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `forward_proxy_uri`<sup>Required</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.forwardProxyUri"></a>

```python
forward_proxy_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentConfig <a name="GoogleApigeeEnvironmentConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  org_id: str,
  api_proxy_type: str = None,
  deployment_type: str = None,
  description: str = None,
  display_name: str = None,
  forward_proxy_uri: str = None,
  id: str = None,
  node_config: GoogleApigeeEnvironmentNodeConfig = None,
  timeouts: GoogleApigeeEnvironmentTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.apiProxyType">api_proxy_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forwardProxyUri">forward_proxy_uri</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.type">type</a></code> | <code>str</code> | Types that can be selected for an Environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#name GoogleApigeeEnvironment#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#org_id GoogleApigeeEnvironment#org_id}

---

##### `api_proxy_type`<sup>Optional</sup> <a name="api_proxy_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.apiProxyType"></a>

```python
api_proxy_type: str
```

- *Type:* str

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#api_proxy_type GoogleApigeeEnvironment#api_proxy_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#deployment_type GoogleApigeeEnvironment#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#description GoogleApigeeEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#display_name GoogleApigeeEnvironment#display_name}

---

##### `forward_proxy_uri`<sup>Optional</sup> <a name="forward_proxy_uri" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.forwardProxyUri"></a>

```python
forward_proxy_uri: str
```

- *Type:* str

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#forward_proxy_uri GoogleApigeeEnvironment#forward_proxy_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#id GoogleApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.nodeConfig"></a>

```python
node_config: GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#node_config GoogleApigeeEnvironment#node_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#timeouts GoogleApigeeEnvironment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#type GoogleApigeeEnvironment#type}

---

### GoogleApigeeEnvironmentNodeConfig <a name="GoogleApigeeEnvironmentNodeConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig(
  max_node_count: str = None,
  min_node_count: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.maxNodeCount">max_node_count</a></code> | <code>str</code> | The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.minNodeCount">min_node_count</a></code> | <code>str</code> | The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. |

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.maxNodeCount"></a>

```python
max_node_count: str
```

- *Type:* str

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#max_node_count GoogleApigeeEnvironment#max_node_count}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig.property.minNodeCount"></a>

```python
min_node_count: str
```

- *Type:* str

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#min_node_count GoogleApigeeEnvironment#min_node_count}

---

### GoogleApigeeEnvironmentTimeouts <a name="GoogleApigeeEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#create GoogleApigeeEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#delete GoogleApigeeEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_environment#update GoogleApigeeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentNodeConfigOutputReference <a name="GoogleApigeeEnvironmentNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount">current_aggregate_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_aggregate_node_count`<sup>Required</sup> <a name="current_aggregate_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount"></a>

```python
current_aggregate_node_count: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: str
```

- *Type:* str

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: str
```

- *Type:* str

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentNodeConfig">GoogleApigeeEnvironmentNodeConfig</a>

---


### GoogleApigeeEnvironmentTimeoutsOutputReference <a name="GoogleApigeeEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment

googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironment.GoogleApigeeEnvironmentTimeouts">GoogleApigeeEnvironmentTimeouts</a>]

---



