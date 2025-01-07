# `googleAccessContextManagerAccessLevels` Submodule <a name="`googleAccessContextManagerAccessLevels` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevels <a name="GoogleAccessContextManagerAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels google_access_context_manager_access_levels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  access_levels: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]] = None,
  id: str = None,
  timeouts: GoogleAccessContextManagerAccessLevelsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.accessLevels">access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]</code> | access_levels block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.parent"></a>

- *Type:* str

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#parent GoogleAccessContextManagerAccessLevels#parent}

---

##### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.accessLevels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#access_levels GoogleAccessContextManagerAccessLevels#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#timeouts GoogleAccessContextManagerAccessLevels#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels">put_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels">reset_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_levels` <a name="put_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels"></a>

```python
def put_access_levels(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}.

---

##### `reset_access_levels` <a name="reset_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels"></a>

```python
def reset_access_levels() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAccessContextManagerAccessLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels">access_levels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput">access_levels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_levels`<sup>Required</sup> <a name="access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels"></a>

```python
access_levels: GoogleAccessContextManagerAccessLevelsAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a>

---

##### `access_levels_input`<sup>Optional</sup> <a name="access_levels_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput"></a>

```python
access_levels_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevels <a name="GoogleAccessContextManagerAccessLevelsAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels(
  name: str,
  title: str,
  basic: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic = None,
  custom: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name">name</a></code> | <code>str</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title">title</a></code> | <code>str</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description">description</a></code> | <code>str</code> | Description of the AccessLevel and its use. Does not affect behavior. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name"></a>

```python
name: str
```

- *Type:* str

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#name GoogleAccessContextManagerAccessLevels#name}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title"></a>

```python
title: str
```

- *Type:* str

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic"></a>

```python
basic: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#basic GoogleAccessContextManagerAccessLevels#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom"></a>

```python
custom: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#custom GoogleAccessContextManagerAccessLevels#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasic <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic(
  conditions: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]],
  combining_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction">combining_function</a></code> | <code>str</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#conditions GoogleAccessContextManagerAccessLevels#conditions}

---

##### `combining_function`<sup>Optional</sup> <a name="combining_function" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction"></a>

```python
combining_function: str
```

- *Type:* str

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#combining_function GoogleAccessContextManagerAccessLevels#combining_function}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions(
  device_policy: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  vpc_network_sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources">vpc_network_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]</code> | vpc_network_sources block. |

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy"></a>

```python
device_policy: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#device_policy GoogleAccessContextManagerAccessLevels#device_policy}

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#ip_subnetworks GoogleAccessContextManagerAccessLevels#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#members GoogleAccessContextManagerAccessLevels#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#negate GoogleAccessContextManagerAccessLevels#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#regions GoogleAccessContextManagerAccessLevels#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#required_access_levels GoogleAccessContextManagerAccessLevels#required_access_levels}

---

##### `vpc_network_sources`<sup>Optional</sup> <a name="vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources"></a>

```python
vpc_network_sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#vpc_network_sources GoogleAccessContextManagerAccessLevels#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints">os_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#allowed_device_management_levels GoogleAccessContextManagerAccessLevels#allowed_device_management_levels}

---

##### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#allowed_encryption_statuses GoogleAccessContextManagerAccessLevels#allowed_encryption_statuses}

---

##### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints"></a>

```python
os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#os_constraints GoogleAccessContextManagerAccessLevels#os_constraints}

---

##### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_admin_approval GoogleAccessContextManagerAccessLevels#require_admin_approval}

---

##### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_corp_owned GoogleAccessContextManagerAccessLevels#require_corp_owned}

---

##### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_screen_lock GoogleAccessContextManagerAccessLevels#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints(
  os_type: str,
  minimum_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType">os_type</a></code> | <code>str</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimum_version</a></code> | <code>str</code> | The minimum allowed OS version. |

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```python
os_type: str
```

- *Type:* str

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#os_type GoogleAccessContextManagerAccessLevels#os_type}

---

##### `minimum_version`<sup>Optional</sup> <a name="minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#minimum_version GoogleAccessContextManagerAccessLevels#minimum_version}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources(
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpc_subnetwork`<sup>Optional</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#vpc_subnetwork GoogleAccessContextManagerAccessLevels#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```python
network: str
```

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#network GoogleAccessContextManagerAccessLevels#network}

---

##### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevels#vpc_ip_subnetworks}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustom <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom(
  expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr"></a>

```python
expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#expr GoogleAccessContextManagerAccessLevels#expr}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#expression GoogleAccessContextManagerAccessLevels#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#location GoogleAccessContextManagerAccessLevels#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

### GoogleAccessContextManagerAccessLevelsConfig <a name="GoogleAccessContextManagerAccessLevelsConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  access_levels: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]] = None,
  id: str = None,
  timeouts: GoogleAccessContextManagerAccessLevelsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent">parent</a></code> | <code>str</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels">access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]</code> | access_levels block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#parent GoogleAccessContextManagerAccessLevels#parent}

---

##### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels"></a>

```python
access_levels: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#access_levels GoogleAccessContextManagerAccessLevels#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerAccessLevelsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#timeouts GoogleAccessContextManagerAccessLevels#timeouts}

---

### GoogleAccessContextManagerAccessLevelsTimeouts <a name="GoogleAccessContextManagerAccessLevelsTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">reset_minimum_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_version` <a name="reset_minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```python
def reset_minimum_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimum_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimum_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_version_input`<sup>Optional</sup> <a name="minimum_version_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```python
minimum_version_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `minimum_version`<sup>Required</sup> <a name="minimum_version" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints">put_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">reset_allowed_device_management_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">reset_allowed_encryption_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints">reset_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">reset_require_admin_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">reset_require_corp_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">reset_require_screen_lock</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_os_constraints` <a name="put_os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```python
def put_os_constraints(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]

---

##### `reset_allowed_device_management_levels` <a name="reset_allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```python
def reset_allowed_device_management_levels() -> None
```

##### `reset_allowed_encryption_statuses` <a name="reset_allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```python
def reset_allowed_encryption_statuses() -> None
```

##### `reset_os_constraints` <a name="reset_os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```python
def reset_os_constraints() -> None
```

##### `reset_require_admin_approval` <a name="reset_require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```python
def reset_require_admin_approval() -> None
```

##### `reset_require_corp_owned` <a name="reset_require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```python
def reset_require_corp_owned() -> None
```

##### `reset_require_screen_lock` <a name="reset_require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```python
def reset_require_screen_lock() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints">os_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowed_device_management_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowed_encryption_statuses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">os_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">require_admin_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">require_corp_owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">require_screen_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_constraints`<sup>Required</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```python
os_constraints: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowed_device_management_levels_input`<sup>Optional</sup> <a name="allowed_device_management_levels_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```python
allowed_device_management_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses_input`<sup>Optional</sup> <a name="allowed_encryption_statuses_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```python
allowed_encryption_statuses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_constraints_input`<sup>Optional</sup> <a name="os_constraints_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```python
os_constraints_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]

---

##### `require_admin_approval_input`<sup>Optional</sup> <a name="require_admin_approval_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```python
require_admin_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned_input`<sup>Optional</sup> <a name="require_corp_owned_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```python
require_corp_owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock_input`<sup>Optional</sup> <a name="require_screen_lock_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```python
require_screen_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_device_management_levels`<sup>Required</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses`<sup>Required</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_admin_approval`<sup>Required</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned`<sup>Required</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock`<sup>Required</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy">put_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources">put_vpc_network_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy">reset_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks">reset_ip_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels">reset_required_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources">reset_vpc_network_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_device_policy` <a name="put_device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy"></a>

```python
def put_device_policy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.allowedDeviceManagementLevels"></a>

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#allowed_device_management_levels GoogleAccessContextManagerAccessLevels#allowed_device_management_levels}

---

###### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.allowedEncryptionStatuses"></a>

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#allowed_encryption_statuses GoogleAccessContextManagerAccessLevels#allowed_encryption_statuses}

---

###### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.osConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#os_constraints GoogleAccessContextManagerAccessLevels#os_constraints}

---

###### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.requireAdminApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_admin_approval GoogleAccessContextManagerAccessLevels#require_admin_approval}

---

###### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.requireCorpOwned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_corp_owned GoogleAccessContextManagerAccessLevels#require_corp_owned}

---

###### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.requireScreenLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#require_screen_lock GoogleAccessContextManagerAccessLevels#require_screen_lock}

---

##### `put_vpc_network_sources` <a name="put_vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources"></a>

```python
def put_vpc_network_sources(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]

---

##### `reset_device_policy` <a name="reset_device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy"></a>

```python
def reset_device_policy() -> None
```

##### `reset_ip_subnetworks` <a name="reset_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks"></a>

```python
def reset_ip_subnetworks() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_required_access_levels` <a name="reset_required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```python
def reset_required_access_levels() -> None
```

##### `reset_vpc_network_sources` <a name="reset_vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```python
def reset_vpc_network_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources">vpc_network_sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput">device_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput">ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput">required_access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput">vpc_network_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy"></a>

```python
device_policy: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a>

---

##### `vpc_network_sources`<sup>Required</sup> <a name="vpc_network_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```python
vpc_network_sources: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a>

---

##### `device_policy_input`<sup>Optional</sup> <a name="device_policy_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput"></a>

```python
device_policy_input: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `ip_subnetworks_input`<sup>Optional</sup> <a name="ip_subnetworks_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```python
ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels_input`<sup>Optional</sup> <a name="required_access_levels_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```python
required_access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_network_sources_input`<sup>Optional</sup> <a name="vpc_network_sources_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```python
vpc_network_sources_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]

---

##### `ip_subnetworks`<sup>Required</sup> <a name="ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels`<sup>Required</sup> <a name="required_access_levels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">put_vpc_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">reset_vpc_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_subnetwork` <a name="put_vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```python
def put_vpc_subnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
) -> None
```

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.network"></a>

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#network GoogleAccessContextManagerAccessLevels#network}

---

###### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.vpcIpSubnetworks"></a>

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevels#vpc_ip_subnetworks}

---

##### `reset_vpc_subnetwork` <a name="reset_vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```python
def reset_vpc_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpc_subnetwork_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_subnetwork`<sup>Required</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpc_subnetwork_input`<sup>Optional</sup> <a name="vpc_subnetwork_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```python
vpc_subnetwork_input: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">reset_vpc_ip_subnetworks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_ip_subnetworks` <a name="reset_vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```python
def reset_vpc_ip_subnetworks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpc_ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks_input`<sup>Optional</sup> <a name="vpc_ip_subnetworks_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```python
vpc_ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks`<sup>Required</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction">reset_combining_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]

---

##### `reset_combining_function` <a name="reset_combining_function" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction"></a>

```python
def reset_combining_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput">combining_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction">combining_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions"></a>

```python
conditions: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a>

---

##### `combining_function_input`<sup>Optional</sup> <a name="combining_function_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput"></a>

```python
combining_function_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]

---

##### `combining_function`<sup>Required</sup> <a name="combining_function" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction"></a>

```python
combining_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr">put_expr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expr` <a name="put_expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr"></a>

```python
def put_expr(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#expression GoogleAccessContextManagerAccessLevels#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.description"></a>

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#location GoogleAccessContextManagerAccessLevels#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput">expr_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr"></a>

```python
expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a>

---

##### `expr_input`<sup>Optional</sup> <a name="expr_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput"></a>

```python
expr_input: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic">reset_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic` <a name="put_basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic"></a>

```python
def put_basic(
  conditions: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions]],
  combining_function: str = None
) -> None
```

###### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#conditions GoogleAccessContextManagerAccessLevels#conditions}

---

###### `combining_function`<sup>Optional</sup> <a name="combining_function" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.combiningFunction"></a>

- *Type:* str

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#combining_function GoogleAccessContextManagerAccessLevels#combining_function}

---

##### `put_custom` <a name="put_custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom"></a>

```python
def put_custom(
  expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr
) -> None
```

###### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom.parameter.expr"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_access_levels#expr GoogleAccessContextManagerAccessLevels#expr}

---

##### `reset_basic` <a name="reset_basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic"></a>

```python
def reset_basic() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput">basic_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput">custom_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic"></a>

```python
basic: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom"></a>

```python
custom: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput"></a>

```python
basic_input: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput"></a>

```python
custom_input: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsAccessLevels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>]

---


### GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_access_levels

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerAccessLevelsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>]

---



