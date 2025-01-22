# `googleSccFolderCustomModule` Submodule <a name="`googleSccFolderCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccFolderCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccFolderCustomModule <a name="GoogleSccFolderCustomModule" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module google_scc_folder_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccFolderCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  folder: str,
  id: str = None,
  timeouts: GoogleSccFolderCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#custom_config GoogleSccFolderCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#display_name GoogleSccFolderCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#enablement_state GoogleSccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.folder"></a>

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#folder GoogleSccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#timeouts GoogleSccFolderCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: GoogleSccFolderCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccFolderCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccFolderCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#predicate GoogleSccFolderCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#recommendation GoogleSccFolderCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#resource_selector GoogleSccFolderCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#severity GoogleSccFolderCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#custom_output GoogleSccFolderCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#create GoogleSccFolderCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#delete GoogleSccFolderCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#update GoogleSccFolderCustomModule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccFolderCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccFolderCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccFolderCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccFolderCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccFolderCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference">GoogleSccFolderCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference">GoogleSccFolderCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfig"></a>

```python
custom_config: GoogleSccFolderCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference">GoogleSccFolderCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccFolderCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference">GoogleSccFolderCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.customConfigInput"></a>

```python
custom_config_input: GoogleSccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccFolderCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccFolderCustomModuleConfig <a name="GoogleSccFolderCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccFolderCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  folder: str,
  id: str = None,
  timeouts: GoogleSccFolderCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.customConfig"></a>

```python
custom_config: GoogleSccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#custom_config GoogleSccFolderCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#display_name GoogleSccFolderCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#enablement_state GoogleSccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#folder GoogleSccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#id GoogleSccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccFolderCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#timeouts GoogleSccFolderCustomModule#timeouts}

---

### GoogleSccFolderCustomModuleCustomConfig <a name="GoogleSccFolderCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig(
  predicate: GoogleSccFolderCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccFolderCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccFolderCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: GoogleSccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#predicate GoogleSccFolderCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#recommendation GoogleSccFolderCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: GoogleSccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#resource_selector GoogleSccFolderCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#severity GoogleSccFolderCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: GoogleSccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#custom_output GoogleSccFolderCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutput <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#properties GoogleSccFolderCustomModule#properties}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#name GoogleSccFolderCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#value_expression GoogleSccFolderCustomModule#value_expression}

---

### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

### GoogleSccFolderCustomModuleCustomConfigPredicate <a name="GoogleSccFolderCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

### GoogleSccFolderCustomModuleCustomConfigResourceSelector <a name="GoogleSccFolderCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#resource_types GoogleSccFolderCustomModule#resource_types}

---

### GoogleSccFolderCustomModuleTimeouts <a name="GoogleSccFolderCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#create GoogleSccFolderCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#delete GoogleSccFolderCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#update GoogleSccFolderCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#create GoogleSccFolderCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#delete GoogleSccFolderCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#update GoogleSccFolderCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]

---


### GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccFolderCustomModuleCustomConfigOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties">GoogleSccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#properties GoogleSccFolderCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#expression GoogleSccFolderCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#description GoogleSccFolderCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#location GoogleSccFolderCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#title GoogleSccFolderCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_scc_folder_custom_module#resource_types GoogleSccFolderCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference">GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccFolderCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference">GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: GoogleSccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigCustomOutput">GoogleSccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: GoogleSccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: GoogleSccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfig">GoogleSccFolderCustomModuleCustomConfig</a>

---


### GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigPredicate">GoogleSccFolderCustomModuleCustomConfigPredicate</a>

---


### GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleCustomConfigResourceSelector">GoogleSccFolderCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccFolderCustomModuleTimeoutsOutputReference <a name="GoogleSccFolderCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_folder_custom_module

googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccFolderCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccFolderCustomModule.GoogleSccFolderCustomModuleTimeouts">GoogleSccFolderCustomModuleTimeouts</a>]

---



