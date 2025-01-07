# `googleDialogflowCxEnvironment` Submodule <a name="`googleDialogflowCxEnvironment` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxEnvironment <a name="GoogleDialogflowCxEnvironment" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment google_dialogflow_cx_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  version_configs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]],
  description: str = None,
  id: str = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxEnvironmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the environment (unique in an agent). Limit of 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.versionConfigs">version_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]</code> | version_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#id GoogleDialogflowCxEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The Agent to create an Environment for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the environment (unique in an agent). Limit of 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#display_name GoogleDialogflowCxEnvironment#display_name}

---

##### `version_configs`<sup>Required</sup> <a name="version_configs" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.versionConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]

version_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#version_configs GoogleDialogflowCxEnvironment#version_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.description"></a>

- *Type:* str

The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#description GoogleDialogflowCxEnvironment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#id GoogleDialogflowCxEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.parent"></a>

- *Type:* str

The Agent to create an Environment for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#parent GoogleDialogflowCxEnvironment#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#timeouts GoogleDialogflowCxEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putVersionConfigs">put_version_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#create GoogleDialogflowCxEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#delete GoogleDialogflowCxEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#update GoogleDialogflowCxEnvironment#update}.

---

##### `put_version_configs` <a name="put_version_configs" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putVersionConfigs"></a>

```python
def put_version_configs(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.putVersionConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference">GoogleDialogflowCxEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.versionConfigs">version_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList">GoogleDialogflowCxEnvironmentVersionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.versionConfigsInput">version_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference">GoogleDialogflowCxEnvironmentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version_configs`<sup>Required</sup> <a name="version_configs" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.versionConfigs"></a>

```python
version_configs: GoogleDialogflowCxEnvironmentVersionConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList">GoogleDialogflowCxEnvironmentVersionConfigsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>]

---

##### `version_configs_input`<sup>Optional</sup> <a name="version_configs_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.versionConfigsInput"></a>

```python
version_configs_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxEnvironmentConfig <a name="GoogleDialogflowCxEnvironmentConfig" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  version_configs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]],
  description: str = None,
  id: str = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxEnvironmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the environment (unique in an agent). Limit of 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.versionConfigs">version_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]</code> | version_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.description">description</a></code> | <code>str</code> | The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#id GoogleDialogflowCxEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.parent">parent</a></code> | <code>str</code> | The Agent to create an Environment for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the environment (unique in an agent). Limit of 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#display_name GoogleDialogflowCxEnvironment#display_name}

---

##### `version_configs`<sup>Required</sup> <a name="version_configs" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.versionConfigs"></a>

```python
version_configs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]

version_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#version_configs GoogleDialogflowCxEnvironment#version_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#description GoogleDialogflowCxEnvironment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#id GoogleDialogflowCxEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The Agent to create an Environment for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#parent GoogleDialogflowCxEnvironment#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#timeouts GoogleDialogflowCxEnvironment#timeouts}

---

### GoogleDialogflowCxEnvironmentTimeouts <a name="GoogleDialogflowCxEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#create GoogleDialogflowCxEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#delete GoogleDialogflowCxEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#update GoogleDialogflowCxEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#create GoogleDialogflowCxEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#delete GoogleDialogflowCxEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#update GoogleDialogflowCxEnvironment#update}.

---

### GoogleDialogflowCxEnvironmentVersionConfigs <a name="GoogleDialogflowCxEnvironmentVersionConfigs" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs(
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs.property.version">version</a></code> | <code>str</code> | Format: projects/{{project}}/locations/{{location}}/agents/{{agent}}/flows/{{flow}}/versions/{{version}}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs.property.version"></a>

```python
version: str
```

- *Type:* str

Format: projects/{{project}}/locations/{{location}}/agents/{{agent}}/flows/{{flow}}/versions/{{version}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dialogflow_cx_environment#version GoogleDialogflowCxEnvironment#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxEnvironmentTimeoutsOutputReference <a name="GoogleDialogflowCxEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentTimeouts">GoogleDialogflowCxEnvironmentTimeouts</a>]

---


### GoogleDialogflowCxEnvironmentVersionConfigsList <a name="GoogleDialogflowCxEnvironmentVersionConfigsList" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxEnvironmentVersionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxEnvironmentVersionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]]

---


### GoogleDialogflowCxEnvironmentVersionConfigsOutputReference <a name="GoogleDialogflowCxEnvironmentVersionConfigsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_environment

googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxEnvironmentVersionConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxEnvironment.GoogleDialogflowCxEnvironmentVersionConfigs">GoogleDialogflowCxEnvironmentVersionConfigs</a>]

---



