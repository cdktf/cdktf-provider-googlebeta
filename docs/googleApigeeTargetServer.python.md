# `googleApigeeTargetServer` Submodule <a name="`googleApigeeTargetServer` Submodule" id="@cdktf/provider-google-beta.googleApigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeTargetServer <a name="GoogleApigeeTargetServer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  description: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  s_sl_info: GoogleApigeeTargetServerSSlInfo = None,
  timeouts: GoogleApigeeTargetServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.host">host</a></code> | <code>str</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.envId"></a>

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#env_id GoogleApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.host"></a>

- *Type:* str

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#host GoogleApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.name"></a>

- *Type:* str

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#name GoogleApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#port GoogleApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#description GoogleApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#is_enabled GoogleApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.protocol"></a>

- *Type:* str

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocol GoogleApigeeTargetServer#protocol}

---

##### `s_sl_info`<sup>Optional</sup> <a name="s_sl_info" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.sSlInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#s_sl_info GoogleApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#timeouts GoogleApigeeTargetServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo">put_s_sl_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo">reset_s_sl_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_s_sl_info` <a name="put_s_sl_info" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo"></a>

```python
def put_s_sl_info(
  enabled: typing.Union[bool, IResolvable],
  ciphers: typing.List[str] = None,
  client_auth_enabled: typing.Union[bool, IResolvable] = None,
  common_name: GoogleApigeeTargetServerSSlInfoCommonName = None,
  ignore_validation_errors: typing.Union[bool, IResolvable] = None,
  key_alias: str = None,
  key_store: str = None,
  protocols: typing.List[str] = None,
  trust_store: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#enabled GoogleApigeeTargetServer#enabled}

---

###### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.ciphers"></a>

- *Type:* typing.List[str]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ciphers GoogleApigeeTargetServer#ciphers}

---

###### `client_auth_enabled`<sup>Optional</sup> <a name="client_auth_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.clientAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#client_auth_enabled GoogleApigeeTargetServer#client_auth_enabled}

---

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.commonName"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#common_name GoogleApigeeTargetServer#common_name}

---

###### `ignore_validation_errors`<sup>Optional</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.ignoreValidationErrors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ignore_validation_errors GoogleApigeeTargetServer#ignore_validation_errors}

---

###### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.keyAlias"></a>

- *Type:* str

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_alias GoogleApigeeTargetServer#key_alias}

---

###### `key_store`<sup>Optional</sup> <a name="key_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.keyStore"></a>

- *Type:* str

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_store GoogleApigeeTargetServer#key_store}

---

###### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.protocols"></a>

- *Type:* typing.List[str]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocols GoogleApigeeTargetServer#protocols}

---

###### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putSSlInfo.parameter.trustStore"></a>

- *Type:* str

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#trust_store GoogleApigeeTargetServer#trust_store}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_s_sl_info` <a name="reset_s_sl_info" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetSSlInfo"></a>

```python
def reset_s_sl_info() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeTargetServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput">s_sl_info_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `s_sl_info`<sup>Required</sup> <a name="s_sl_info" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfo"></a>

```python
s_sl_info: GoogleApigeeTargetServerSSlInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference">GoogleApigeeTargetServerSSlInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeouts"></a>

```python
timeouts: GoogleApigeeTargetServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference">GoogleApigeeTargetServerTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `s_sl_info_input`<sup>Optional</sup> <a name="s_sl_info_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.sSlInfoInput"></a>

```python
s_sl_info_input: GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeTargetServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeTargetServerConfig <a name="GoogleApigeeTargetServerConfig" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_id: str,
  host: str,
  name: str,
  port: typing.Union[int, float],
  description: str = None,
  id: str = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  protocol: str = None,
  s_sl_info: GoogleApigeeTargetServerSSlInfo = None,
  timeouts: GoogleApigeeTargetServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId">env_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host">host</a></code> | <code>str</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name">name</a></code> | <code>str</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol">protocol</a></code> | <code>str</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo">s_sl_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.envId"></a>

```python
env_id: str
```

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#env_id GoogleApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#host GoogleApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#name GoogleApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#port GoogleApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#description GoogleApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#id GoogleApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#is_enabled GoogleApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocol GoogleApigeeTargetServer#protocol}

---

##### `s_sl_info`<sup>Optional</sup> <a name="s_sl_info" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.sSlInfo"></a>

```python
s_sl_info: GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#s_sl_info GoogleApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeTargetServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#timeouts GoogleApigeeTargetServer#timeouts}

---

### GoogleApigeeTargetServerSSlInfo <a name="GoogleApigeeTargetServerSSlInfo" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo(
  enabled: typing.Union[bool, IResolvable],
  ciphers: typing.List[str] = None,
  client_auth_enabled: typing.Union[bool, IResolvable] = None,
  common_name: GoogleApigeeTargetServerSSlInfoCommonName = None,
  ignore_validation_errors: typing.Union[bool, IResolvable] = None,
  key_alias: str = None,
  key_store: str = None,
  protocols: typing.List[str] = None,
  trust_store: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled">client_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName">common_name</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors">ignore_validation_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias">key_alias</a></code> | <code>str</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore">key_store</a></code> | <code>str</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore">trust_store</a></code> | <code>str</code> | The resource ID of the truststore. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#enabled GoogleApigeeTargetServer#enabled}

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ciphers GoogleApigeeTargetServer#ciphers}

---

##### `client_auth_enabled`<sup>Optional</sup> <a name="client_auth_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```python
client_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#client_auth_enabled GoogleApigeeTargetServer#client_auth_enabled}

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.commonName"></a>

```python
common_name: GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#common_name GoogleApigeeTargetServer#common_name}

---

##### `ignore_validation_errors`<sup>Optional</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```python
ignore_validation_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#ignore_validation_errors GoogleApigeeTargetServer#ignore_validation_errors}

---

##### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_alias GoogleApigeeTargetServer#key_alias}

---

##### `key_store`<sup>Optional</sup> <a name="key_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#key_store GoogleApigeeTargetServer#key_store}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#protocols GoogleApigeeTargetServer#protocols}

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#trust_store GoogleApigeeTargetServer#trust_store}

---

### GoogleApigeeTargetServerSSlInfoCommonName <a name="GoogleApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName(
  value: str = None,
  wildcard_match: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value">value</a></code> | <code>str</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">wildcard_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.value"></a>

```python
value: str
```

- *Type:* str

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#value GoogleApigeeTargetServer#value}

---

##### `wildcard_match`<sup>Optional</sup> <a name="wildcard_match" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```python
wildcard_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#wildcard_match GoogleApigeeTargetServer#wildcard_match}

---

### GoogleApigeeTargetServerTimeouts <a name="GoogleApigeeTargetServerTimeouts" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#create GoogleApigeeTargetServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#delete GoogleApigeeTargetServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#update GoogleApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeTargetServerSSlInfoCommonNameOutputReference <a name="GoogleApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">reset_wildcard_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_wildcard_match` <a name="reset_wildcard_match" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```python
def reset_wildcard_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">wildcard_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">wildcard_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `wildcard_match_input`<sup>Optional</sup> <a name="wildcard_match_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```python
wildcard_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `wildcard_match`<sup>Required</sup> <a name="wildcard_match" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```python
wildcard_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---


### GoogleApigeeTargetServerSSlInfoOutputReference <a name="GoogleApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName">put_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers">reset_ciphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">reset_client_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">reset_ignore_validation_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">reset_key_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore">reset_key_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore">reset_trust_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_common_name` <a name="put_common_name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```python
def put_common_name(
  value: str = None,
  wildcard_match: typing.Union[bool, IResolvable] = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* str

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#value GoogleApigeeTargetServer#value}

---

###### `wildcard_match`<sup>Optional</sup> <a name="wildcard_match" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.wildcardMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_apigee_target_server#wildcard_match GoogleApigeeTargetServer#wildcard_match}

---

##### `reset_ciphers` <a name="reset_ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```python
def reset_ciphers() -> None
```

##### `reset_client_auth_enabled` <a name="reset_client_auth_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```python
def reset_client_auth_enabled() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_ignore_validation_errors` <a name="reset_ignore_validation_errors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```python
def reset_ignore_validation_errors() -> None
```

##### `reset_key_alias` <a name="reset_key_alias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```python
def reset_key_alias() -> None
```

##### `reset_key_store` <a name="reset_key_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```python
def reset_key_store() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_trust_store` <a name="reset_trust_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```python
def reset_trust_store() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName">common_name</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">ciphers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">client_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">common_name_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">ignore_validation_errors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">key_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">key_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">trust_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers">ciphers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">client_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">ignore_validation_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias">key_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore">key_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore">trust_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```python
common_name: GoogleApigeeTargetServerSSlInfoCommonNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonNameOutputReference">GoogleApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `ciphers_input`<sup>Optional</sup> <a name="ciphers_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```python
ciphers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_auth_enabled_input`<sup>Optional</sup> <a name="client_auth_enabled_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```python
client_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```python
common_name_input: GoogleApigeeTargetServerSSlInfoCommonName
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoCommonName">GoogleApigeeTargetServerSSlInfoCommonName</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_validation_errors_input`<sup>Optional</sup> <a name="ignore_validation_errors_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```python
ignore_validation_errors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias_input`<sup>Optional</sup> <a name="key_alias_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```python
key_alias_input: str
```

- *Type:* str

---

##### `key_store_input`<sup>Optional</sup> <a name="key_store_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```python
key_store_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```python
trust_store_input: str
```

- *Type:* str

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```python
ciphers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_auth_enabled`<sup>Required</sup> <a name="client_auth_enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```python
client_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_validation_errors`<sup>Required</sup> <a name="ignore_validation_errors" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```python
ignore_validation_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

---

##### `key_store`<sup>Required</sup> <a name="key_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeTargetServerSSlInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerSSlInfo">GoogleApigeeTargetServerSSlInfo</a>

---


### GoogleApigeeTargetServerTimeoutsOutputReference <a name="GoogleApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_target_server

googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeTargetServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeTargetServer.GoogleApigeeTargetServerTimeouts">GoogleApigeeTargetServerTimeouts</a>]

---



