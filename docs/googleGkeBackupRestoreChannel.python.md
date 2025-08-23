# `googleGkeBackupRestoreChannel` Submodule <a name="`googleGkeBackupRestoreChannel` Submodule" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupRestoreChannel <a name="GoogleGkeBackupRestoreChannel" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel google_gke_backup_restore_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_project: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeBackupRestoreChannelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.destinationProject">destination_project</a></code> | <code>str</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the Restore Channel. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_project`<sup>Required</sup> <a name="destination_project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.destinationProject"></a>

- *Type:* str

The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#destination_project GoogleGkeBackupRestoreChannel#destination_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.location"></a>

- *Type:* str

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#location GoogleGkeBackupRestoreChannel#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.name"></a>

- *Type:* str

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#name GoogleGkeBackupRestoreChannel#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.description"></a>

- *Type:* str

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#description GoogleGkeBackupRestoreChannel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#labels GoogleGkeBackupRestoreChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#timeouts GoogleGkeBackupRestoreChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#create GoogleGkeBackupRestoreChannel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#delete GoogleGkeBackupRestoreChannel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#update GoogleGkeBackupRestoreChannel#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleGkeBackupRestoreChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleGkeBackupRestoreChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeBackupRestoreChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeBackupRestoreChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupRestoreChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectId">destination_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference">GoogleGkeBackupRestoreChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectInput">destination_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProject">destination_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_project_id`<sup>Required</sup> <a name="destination_project_id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectId"></a>

```python
destination_project_id: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupRestoreChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference">GoogleGkeBackupRestoreChannelTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_project_input`<sup>Optional</sup> <a name="destination_project_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectInput"></a>

```python
destination_project_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGkeBackupRestoreChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_project`<sup>Required</sup> <a name="destination_project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProject"></a>

```python
destination_project: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupRestoreChannelConfig <a name="GoogleGkeBackupRestoreChannelConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_project: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeBackupRestoreChannelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.destinationProject">destination_project</a></code> | <code>str</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.location">location</a></code> | <code>str</code> | The region of the Restore Channel. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.name">name</a></code> | <code>str</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_project`<sup>Required</sup> <a name="destination_project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.destinationProject"></a>

```python
destination_project: str
```

- *Type:* str

The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#destination_project GoogleGkeBackupRestoreChannel#destination_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#location GoogleGkeBackupRestoreChannel#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#name GoogleGkeBackupRestoreChannel#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#description GoogleGkeBackupRestoreChannel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#labels GoogleGkeBackupRestoreChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupRestoreChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#timeouts GoogleGkeBackupRestoreChannel#timeouts}

---

### GoogleGkeBackupRestoreChannelTimeouts <a name="GoogleGkeBackupRestoreChannelTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#create GoogleGkeBackupRestoreChannel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#delete GoogleGkeBackupRestoreChannel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#update GoogleGkeBackupRestoreChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#create GoogleGkeBackupRestoreChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#delete GoogleGkeBackupRestoreChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_gke_backup_restore_channel#update GoogleGkeBackupRestoreChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupRestoreChannelTimeoutsOutputReference <a name="GoogleGkeBackupRestoreChannelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_channel

googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestoreChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>]

---



