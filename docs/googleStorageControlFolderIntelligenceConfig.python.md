# `googleStorageControlFolderIntelligenceConfig` Submodule <a name="`googleStorageControlFolderIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlFolderIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config google_storage_control_folder_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig(
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
  edition_config: str = None,
  filter: GoogleStorageControlFolderIntelligenceConfigFilter = None,
  id: str = None,
  timeouts: GoogleStorageControlFolderIntelligenceConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.editionConfig">edition_config</a></code> | <code>str</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* str

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#name GoogleStorageControlFolderIntelligenceConfig#name}

---

##### `edition_config`<sup>Optional</sup> <a name="edition_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.editionConfig"></a>

- *Type:* str

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#edition_config GoogleStorageControlFolderIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#filter GoogleStorageControlFolderIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#timeouts GoogleStorageControlFolderIntelligenceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig">reset_edition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter"></a>

```python
def put_filter(
  excluded_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets = None,
  excluded_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations = None,
  included_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets = None,
  included_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations = None
) -> None
```

###### `excluded_cloud_storage_buckets`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.excludedCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

###### `excluded_cloud_storage_locations`<sup>Optional</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.excludedCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

###### `included_cloud_storage_buckets`<sup>Optional</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.includedCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

###### `included_cloud_storage_locations`<sup>Optional</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.includedCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}.

---

##### `reset_edition_config` <a name="reset_edition_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig"></a>

```python
def reset_edition_config() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageControlFolderIntelligenceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageControlFolderIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlFolderIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig">effective_intelligence_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig">trial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput">edition_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_intelligence_config`<sup>Required</sup> <a name="effective_intelligence_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```python
effective_intelligence_config: GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter"></a>

```python
filter: GoogleStorageControlFolderIntelligenceConfigFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trial_config`<sup>Required</sup> <a name="trial_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig"></a>

```python
trial_config: GoogleStorageControlFolderIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `edition_config_input`<sup>Optional</sup> <a name="edition_config_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput"></a>

```python
edition_config_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput"></a>

```python
filter_input: GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleStorageControlFolderIntelligenceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>]

---

##### `edition_config`<sup>Required</sup> <a name="edition_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlFolderIntelligenceConfigConfig <a name="GoogleStorageControlFolderIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  edition_config: str = None,
  filter: GoogleStorageControlFolderIntelligenceConfigFilter = None,
  id: str = None,
  timeouts: GoogleStorageControlFolderIntelligenceConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name">name</a></code> | <code>str</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#name GoogleStorageControlFolderIntelligenceConfig#name}

---

##### `edition_config`<sup>Optional</sup> <a name="edition_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#edition_config GoogleStorageControlFolderIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter"></a>

```python
filter: GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#filter GoogleStorageControlFolderIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageControlFolderIntelligenceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#timeouts GoogleStorageControlFolderIntelligenceConfig#timeouts}

---

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig()
```


### GoogleStorageControlFolderIntelligenceConfigFilter <a name="GoogleStorageControlFolderIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter(
  excluded_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets = None,
  excluded_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations = None,
  included_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets = None,
  included_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excluded_cloud_storage_buckets`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excluded_cloud_storage_locations`<sup>Optional</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `included_cloud_storage_buckets`<sup>Optional</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

##### `included_cloud_storage_locations`<sup>Optional</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets(
  bucket_id_regexes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets(
  bucket_id_regexes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigTimeouts <a name="GoogleStorageControlFolderIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}.

---

### GoogleStorageControlFolderIntelligenceConfigTrialConfig <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effective_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligence_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_edition`<sup>Required</sup> <a name="effective_edition" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```python
effective_edition: str
```

- *Type:* str

---

##### `intelligence_config`<sup>Required</sup> <a name="intelligence_config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```python
intelligence_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucket_id_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes_input`<sup>Optional</sup> <a name="bucket_id_regexes_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```python
bucket_id_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucket_id_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes_input`<sup>Optional</sup> <a name="bucket_id_regexes_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```python
bucket_id_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">put_excluded_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">put_excluded_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">put_included_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">put_included_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">reset_excluded_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">reset_excluded_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">reset_included_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">reset_included_cloud_storage_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_cloud_storage_buckets` <a name="put_excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```python
def put_excluded_cloud_storage_buckets(
  bucket_id_regexes: typing.List[str]
) -> None
```

###### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.bucketIdRegexes"></a>

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

##### `put_excluded_cloud_storage_locations` <a name="put_excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```python
def put_excluded_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

##### `put_included_cloud_storage_buckets` <a name="put_included_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```python
def put_included_cloud_storage_buckets(
  bucket_id_regexes: typing.List[str]
) -> None
```

###### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.bucketIdRegexes"></a>

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

##### `put_included_cloud_storage_locations` <a name="put_included_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```python
def put_included_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

##### `reset_excluded_cloud_storage_buckets` <a name="reset_excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```python
def reset_excluded_cloud_storage_buckets() -> None
```

##### `reset_excluded_cloud_storage_locations` <a name="reset_excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```python
def reset_excluded_cloud_storage_locations() -> None
```

##### `reset_included_cloud_storage_buckets` <a name="reset_included_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```python
def reset_included_cloud_storage_buckets() -> None
```

##### `reset_included_cloud_storage_locations` <a name="reset_included_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```python
def reset_included_cloud_storage_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excluded_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excluded_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">included_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">included_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_cloud_storage_buckets`<sup>Required</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excluded_cloud_storage_locations`<sup>Required</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `included_cloud_storage_locations`<sup>Required</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excluded_cloud_storage_buckets_input`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```python
excluded_cloud_storage_buckets_input: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excluded_cloud_storage_locations_input`<sup>Optional</sup> <a name="excluded_cloud_storage_locations_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```python
excluded_cloud_storage_locations_input: GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `included_cloud_storage_buckets_input`<sup>Optional</sup> <a name="included_cloud_storage_buckets_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```python
included_cloud_storage_buckets_input: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `included_cloud_storage_locations_input`<sup>Optional</sup> <a name="included_cloud_storage_locations_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```python
included_cloud_storage_locations_input: GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---


### GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageControlFolderIntelligenceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>]

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigList <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_control_folder_intelligence_config

googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlFolderIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a>

---



