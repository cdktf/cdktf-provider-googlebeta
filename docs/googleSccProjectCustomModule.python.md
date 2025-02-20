# `googleSccProjectCustomModule` Submodule <a name="`googleSccProjectCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccProjectCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccProjectCustomModule <a name="GoogleSccProjectCustomModule" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module google_scc_project_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccProjectCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleSccProjectCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#id GoogleSccProjectCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#project GoogleSccProjectCustomModule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#custom_config GoogleSccProjectCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#display_name GoogleSccProjectCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#enablement_state GoogleSccProjectCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#id GoogleSccProjectCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#project GoogleSccProjectCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#timeouts GoogleSccProjectCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: GoogleSccProjectCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccProjectCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccProjectCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#predicate GoogleSccProjectCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#recommendation GoogleSccProjectCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#resource_selector GoogleSccProjectCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#severity GoogleSccProjectCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#custom_output GoogleSccProjectCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#create GoogleSccProjectCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#delete GoogleSccProjectCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#update GoogleSccProjectCustomModule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSccProjectCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSccProjectCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSccProjectCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSccProjectCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccProjectCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference">GoogleSccProjectCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference">GoogleSccProjectCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.customConfig"></a>

```python
custom_config: GoogleSccProjectCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference">GoogleSccProjectCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.timeouts"></a>

```python
timeouts: GoogleSccProjectCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference">GoogleSccProjectCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.customConfigInput"></a>

```python
custom_config_input: GoogleSccProjectCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSccProjectCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccProjectCustomModuleConfig <a name="GoogleSccProjectCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: GoogleSccProjectCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleSccProjectCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#id GoogleSccProjectCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#project GoogleSccProjectCustomModule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.customConfig"></a>

```python
custom_config: GoogleSccProjectCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#custom_config GoogleSccProjectCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#display_name GoogleSccProjectCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#enablement_state GoogleSccProjectCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#id GoogleSccProjectCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#project GoogleSccProjectCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleConfig.property.timeouts"></a>

```python
timeouts: GoogleSccProjectCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#timeouts GoogleSccProjectCustomModule#timeouts}

---

### GoogleSccProjectCustomModuleCustomConfig <a name="GoogleSccProjectCustomModuleCustomConfig" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig(
  predicate: GoogleSccProjectCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: GoogleSccProjectCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: GoogleSccProjectCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: GoogleSccProjectCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#predicate GoogleSccProjectCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#recommendation GoogleSccProjectCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: GoogleSccProjectCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#resource_selector GoogleSccProjectCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#severity GoogleSccProjectCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: GoogleSccProjectCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#custom_output GoogleSccProjectCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

### GoogleSccProjectCustomModuleCustomConfigCustomOutput <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#properties GoogleSccProjectCustomModule#properties}

---

### GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#name GoogleSccProjectCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#value_expression GoogleSccProjectCustomModule#value_expression}

---

### GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#expression GoogleSccProjectCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#location GoogleSccProjectCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#title GoogleSccProjectCustomModule#title}

---

### GoogleSccProjectCustomModuleCustomConfigPredicate <a name="GoogleSccProjectCustomModuleCustomConfigPredicate" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#expression GoogleSccProjectCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#location GoogleSccProjectCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#title GoogleSccProjectCustomModule#title}

---

### GoogleSccProjectCustomModuleCustomConfigResourceSelector <a name="GoogleSccProjectCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#resource_types GoogleSccProjectCustomModule#resource_types}

---

### GoogleSccProjectCustomModuleTimeouts <a name="GoogleSccProjectCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#create GoogleSccProjectCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#delete GoogleSccProjectCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#update GoogleSccProjectCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#create GoogleSccProjectCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#delete GoogleSccProjectCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#update GoogleSccProjectCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccProjectCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a>

---


### GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#expression GoogleSccProjectCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#location GoogleSccProjectCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#title GoogleSccProjectCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]

---


### GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">GoogleSccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### GoogleSccProjectCustomModuleCustomConfigOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties">GoogleSccProjectCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#properties GoogleSccProjectCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#expression GoogleSccProjectCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#description GoogleSccProjectCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#location GoogleSccProjectCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#title GoogleSccProjectCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_scc_project_custom_module#resource_types GoogleSccProjectCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference">GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference">GoogleSccProjectCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference">GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference">GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: GoogleSccProjectCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigCustomOutput">GoogleSccProjectCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: GoogleSccProjectCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: GoogleSccProjectCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccProjectCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfig">GoogleSccProjectCustomModuleCustomConfig</a>

---


### GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccProjectCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigPredicate">GoogleSccProjectCustomModuleCustomConfigPredicate</a>

---


### GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference <a name="GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSccProjectCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleCustomConfigResourceSelector">GoogleSccProjectCustomModuleCustomConfigResourceSelector</a>

---


### GoogleSccProjectCustomModuleTimeoutsOutputReference <a name="GoogleSccProjectCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_scc_project_custom_module

googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSccProjectCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSccProjectCustomModule.GoogleSccProjectCustomModuleTimeouts">GoogleSccProjectCustomModuleTimeouts</a>]

---



