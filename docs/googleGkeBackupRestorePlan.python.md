# `googleGkeBackupRestorePlan` Submodule <a name="`googleGkeBackupRestorePlan` Submodule" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupRestorePlan <a name="GoogleGkeBackupRestorePlan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan google_gke_backup_restore_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan: str,
  cluster: str,
  location: str,
  name: str,
  restore_config: GoogleGkeBackupRestorePlanRestoreConfig,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeBackupRestorePlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.backupPlan">backup_plan</a></code> | <code>str</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.backupPlan"></a>

- *Type:* str

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#backup_plan GoogleGkeBackupRestorePlan#backup_plan}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.cluster"></a>

- *Type:* str

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster GoogleGkeBackupRestorePlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.location"></a>

- *Type:* str

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#location GoogleGkeBackupRestorePlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.name"></a>

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#name GoogleGkeBackupRestorePlan#name}

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.restoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#restore_config GoogleGkeBackupRestorePlan#restore_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.description"></a>

- *Type:* str

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#description GoogleGkeBackupRestorePlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#labels GoogleGkeBackupRestorePlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#timeouts GoogleGkeBackupRestorePlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig">put_restore_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_restore_config` <a name="put_restore_config" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig"></a>

```python
def put_restore_config(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  cluster_resource_conflict_policy: str = None,
  cluster_resource_restore_scope: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope = None,
  excluded_namespaces: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces = None,
  namespaced_resource_restore_mode: str = None,
  no_namespaces: typing.Union[bool, IResolvable] = None,
  restore_order: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder = None,
  selected_applications: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications = None,
  selected_namespaces: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces = None,
  transformation_rules: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]] = None,
  volume_data_restore_policy: str = None,
  volume_data_restore_policy_bindings: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]] = None
) -> None
```

###### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.allNamespaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#all_namespaces GoogleGkeBackupRestorePlan#all_namespaces}

---

###### `cluster_resource_conflict_policy`<sup>Optional</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.clusterResourceConflictPolicy"></a>

- *Type:* str

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_conflict_policy GoogleGkeBackupRestorePlan#cluster_resource_conflict_policy}

---

###### `cluster_resource_restore_scope`<sup>Optional</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.clusterResourceRestoreScope"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_restore_scope GoogleGkeBackupRestorePlan#cluster_resource_restore_scope}

---

###### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.excludedNamespaces"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#excluded_namespaces GoogleGkeBackupRestorePlan#excluded_namespaces}

---

###### `namespaced_resource_restore_mode`<sup>Optional</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.namespacedResourceRestoreMode"></a>

- *Type:* str

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT", "MERGE_SKIP_ON_CONFLICT", "MERGE_REPLACE_VOLUME_ON_CONFLICT", "MERGE_REPLACE_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaced_resource_restore_mode GoogleGkeBackupRestorePlan#namespaced_resource_restore_mode}

---

###### `no_namespaces`<sup>Optional</sup> <a name="no_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.noNamespaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#no_namespaces GoogleGkeBackupRestorePlan#no_namespaces}

---

###### `restore_order`<sup>Optional</sup> <a name="restore_order" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.restoreOrder"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

restore_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#restore_order GoogleGkeBackupRestorePlan#restore_order}

---

###### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.selectedApplications"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_applications GoogleGkeBackupRestorePlan#selected_applications}

---

###### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.selectedNamespaces"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_namespaces GoogleGkeBackupRestorePlan#selected_namespaces}

---

###### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.transformationRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#transformation_rules GoogleGkeBackupRestorePlan#transformation_rules}

---

###### `volume_data_restore_policy`<sup>Optional</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.volumeDataRestorePolicy"></a>

- *Type:* str

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy GoogleGkeBackupRestorePlan#volume_data_restore_policy}

---

###### `volume_data_restore_policy_bindings`<sup>Optional</sup> <a name="volume_data_restore_policy_bindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putRestoreConfig.parameter.volumeDataRestorePolicyBindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]

volume_data_restore_policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy_bindings GoogleGkeBackupRestorePlan#volume_data_restore_policy_bindings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#create GoogleGkeBackupRestorePlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#delete GoogleGkeBackupRestorePlan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#update GoogleGkeBackupRestorePlan#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleGkeBackupRestorePlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleGkeBackupRestorePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGkeBackupRestorePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGkeBackupRestorePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupRestorePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference">GoogleGkeBackupRestorePlanRestoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference">GoogleGkeBackupRestorePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlanInput">backup_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfigInput">restore_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfig"></a>

```python
restore_config: GoogleGkeBackupRestorePlanRestoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference">GoogleGkeBackupRestorePlanRestoreConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupRestorePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference">GoogleGkeBackupRestorePlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `backup_plan_input`<sup>Optional</sup> <a name="backup_plan_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlanInput"></a>

```python
backup_plan_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_config_input`<sup>Optional</sup> <a name="restore_config_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.restoreConfigInput"></a>

```python
restore_config_input: GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGkeBackupRestorePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupRestorePlanConfig <a name="GoogleGkeBackupRestorePlanConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan: str,
  cluster: str,
  location: str,
  name: str,
  restore_config: GoogleGkeBackupRestorePlanRestoreConfig,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGkeBackupRestorePlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.backupPlan">backup_plan</a></code> | <code>str</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.location">location</a></code> | <code>str</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.restoreConfig">restore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.description">description</a></code> | <code>str</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#backup_plan GoogleGkeBackupRestorePlan#backup_plan}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster GoogleGkeBackupRestorePlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#location GoogleGkeBackupRestorePlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#name GoogleGkeBackupRestorePlan#name}

---

##### `restore_config`<sup>Required</sup> <a name="restore_config" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.restoreConfig"></a>

```python
restore_config: GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#restore_config GoogleGkeBackupRestorePlan#restore_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#description GoogleGkeBackupRestorePlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#id GoogleGkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#labels GoogleGkeBackupRestorePlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#project GoogleGkeBackupRestorePlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupRestorePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#timeouts GoogleGkeBackupRestorePlan#timeouts}

---

### GoogleGkeBackupRestorePlanRestoreConfig <a name="GoogleGkeBackupRestorePlanRestoreConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  cluster_resource_conflict_policy: str = None,
  cluster_resource_restore_scope: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope = None,
  excluded_namespaces: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces = None,
  namespaced_resource_restore_mode: str = None,
  no_namespaces: typing.Union[bool, IResolvable] = None,
  restore_order: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder = None,
  selected_applications: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications = None,
  selected_namespaces: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces = None,
  transformation_rules: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]] = None,
  volume_data_restore_policy: str = None,
  volume_data_restore_policy_bindings: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy">cluster_resource_conflict_policy</a></code> | <code>str</code> | Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope">cluster_resource_restore_scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | cluster_resource_restore_scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.excludedNamespaces">excluded_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | excluded_namespaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode">namespaced_resource_restore_mode</a></code> | <code>str</code> | Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.noNamespaces">no_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.restoreOrder">restore_order</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | restore_order block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | selected_namespaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.transformationRules">transformation_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | transformation_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy">volume_data_restore_policy</a></code> | <code>str</code> | Specifies the mechanism to be used to restore volume data. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings">volume_data_restore_policy_bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]</code> | volume_data_restore_policy_bindings block. |

---

##### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#all_namespaces GoogleGkeBackupRestorePlan#all_namespaces}

---

##### `cluster_resource_conflict_policy`<sup>Optional</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy"></a>

```python
cluster_resource_conflict_policy: str
```

- *Type:* str

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_conflict_policy GoogleGkeBackupRestorePlan#cluster_resource_conflict_policy}

---

##### `cluster_resource_restore_scope`<sup>Optional</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope"></a>

```python
cluster_resource_restore_scope: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#cluster_resource_restore_scope GoogleGkeBackupRestorePlan#cluster_resource_restore_scope}

---

##### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.excludedNamespaces"></a>

```python
excluded_namespaces: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#excluded_namespaces GoogleGkeBackupRestorePlan#excluded_namespaces}

---

##### `namespaced_resource_restore_mode`<sup>Optional</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode"></a>

```python
namespaced_resource_restore_mode: str
```

- *Type:* str

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT", "MERGE_SKIP_ON_CONFLICT", "MERGE_REPLACE_VOLUME_ON_CONFLICT", "MERGE_REPLACE_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaced_resource_restore_mode GoogleGkeBackupRestorePlan#namespaced_resource_restore_mode}

---

##### `no_namespaces`<sup>Optional</sup> <a name="no_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.noNamespaces"></a>

```python
no_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#no_namespaces GoogleGkeBackupRestorePlan#no_namespaces}

---

##### `restore_order`<sup>Optional</sup> <a name="restore_order" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.restoreOrder"></a>

```python
restore_order: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

restore_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#restore_order GoogleGkeBackupRestorePlan#restore_order}

---

##### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedApplications"></a>

```python
selected_applications: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_applications GoogleGkeBackupRestorePlan#selected_applications}

---

##### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.selectedNamespaces"></a>

```python
selected_namespaces: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_namespaces GoogleGkeBackupRestorePlan#selected_namespaces}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.transformationRules"></a>

```python
transformation_rules: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#transformation_rules GoogleGkeBackupRestorePlan#transformation_rules}

---

##### `volume_data_restore_policy`<sup>Optional</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy"></a>

```python
volume_data_restore_policy: str
```

- *Type:* str

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy GoogleGkeBackupRestorePlan#volume_data_restore_policy}

---

##### `volume_data_restore_policy_bindings`<sup>Optional</sup> <a name="volume_data_restore_policy_bindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings"></a>

```python
volume_data_restore_policy_bindings: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]

volume_data_restore_policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#volume_data_restore_policy_bindings GoogleGkeBackupRestorePlan#volume_data_restore_policy_bindings}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope(
  all_group_kinds: typing.Union[bool, IResolvable] = None,
  excluded_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]] = None,
  no_group_kinds: typing.Union[bool, IResolvable] = None,
  selected_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds">all_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds">excluded_group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | excluded_group_kinds block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds">no_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds">selected_group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | selected_group_kinds block. |

---

##### `all_group_kinds`<sup>Optional</sup> <a name="all_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds"></a>

```python
all_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#all_group_kinds GoogleGkeBackupRestorePlan#all_group_kinds}

---

##### `excluded_group_kinds`<sup>Optional</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds"></a>

```python
excluded_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#excluded_group_kinds GoogleGkeBackupRestorePlan#excluded_group_kinds}

---

##### `no_group_kinds`<sup>Optional</sup> <a name="no_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds"></a>

```python
no_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#no_group_kinds GoogleGkeBackupRestorePlan#no_group_kinds}

---

##### `selected_group_kinds`<sup>Optional</sup> <a name="selected_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds"></a>

```python
selected_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_group_kinds GoogleGkeBackupRestorePlan#selected_group_kinds}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces <a name="GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces(
  namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder(
  group_kind_dependencies: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies">group_kind_dependencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]</code> | group_kind_dependencies block. |

---

##### `group_kind_dependencies`<sup>Required</sup> <a name="group_kind_dependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies"></a>

```python
group_kind_dependencies: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]

group_kind_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#group_kind_dependencies GoogleGkeBackupRestorePlan#group_kind_dependencies}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies(
  requiring: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring,
  satisfying: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring">requiring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | requiring block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying">satisfying</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | satisfying block. |

---

##### `requiring`<sup>Required</sup> <a name="requiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring"></a>

```python
requiring: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

requiring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#requiring GoogleGkeBackupRestorePlan#requiring}

---

##### `satisfying`<sup>Required</sup> <a name="satisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying"></a>

```python
satisfying: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

satisfying block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#satisfying GoogleGkeBackupRestorePlan#satisfying}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications(
  namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames">namespaced_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | namespaced_names block. |

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames"></a>

```python
namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaced_names GoogleGkeBackupRestorePlan#namespaced_names}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames(
  name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>str</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>str</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#name GoogleGkeBackupRestorePlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespace GoogleGkeBackupRestorePlan#namespace}

---

### GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces(
  namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRules <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules(
  field_actions: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]],
  description: str = None,
  resource_filter: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions">field_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | field_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.description">description</a></code> | <code>str</code> | The description is a user specified string description of the transformation rule. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter">resource_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | resource_filter block. |

---

##### `field_actions`<sup>Required</sup> <a name="field_actions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions"></a>

```python
field_actions: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

field_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#field_actions GoogleGkeBackupRestorePlan#field_actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description is a user specified string description of the transformation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#description GoogleGkeBackupRestorePlan#description}

---

##### `resource_filter`<sup>Optional</sup> <a name="resource_filter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter"></a>

```python
resource_filter: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_filter GoogleGkeBackupRestorePlan#resource_filter}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions(
  op: str,
  from_path: str = None,
  path: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op">op</a></code> | <code>str</code> | Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath">from_path</a></code> | <code>str</code> | A string containing a JSON Pointer value that references the location in the target document to move the value from. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path">path</a></code> | <code>str</code> | A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value">value</a></code> | <code>str</code> | A string that specifies the desired value in string format to use for transformation. |

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op"></a>

```python
op: str
```

- *Type:* str

Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#op GoogleGkeBackupRestorePlan#op}

---

##### `from_path`<sup>Optional</sup> <a name="from_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath"></a>

```python
from_path: str
```

- *Type:* str

A string containing a JSON Pointer value that references the location in the target document to move the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#from_path GoogleGkeBackupRestorePlan#from_path}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path"></a>

```python
path: str
```

- *Type:* str

A string containing a JSON-Pointer value that references a location within the target document where the operation is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#path GoogleGkeBackupRestorePlan#path}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value"></a>

```python
value: str
```

- *Type:* str

A string that specifies the desired value in string format to use for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#value GoogleGkeBackupRestorePlan#value}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter(
  group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]] = None,
  json_path: str = None,
  namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds">group_kinds</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | group_kinds block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath">json_path</a></code> | <code>str</code> | This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. |

---

##### `group_kinds`<sup>Optional</sup> <a name="group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds"></a>

```python
group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#group_kinds GoogleGkeBackupRestorePlan#group_kinds}

---

##### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#json_path GoogleGkeBackupRestorePlan#json_path}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds(
  resource_group: str = None,
  resource_kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup">resource_group</a></code> | <code>str</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind">resource_kind</a></code> | <code>str</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

##### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings(
  policy: str,
  volume_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy">policy</a></code> | <code>str</code> | Specifies the mechanism to be used to restore this volume data. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType">volume_type</a></code> | <code>str</code> | The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"]. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy"></a>

```python
policy: str
```

- *Type:* str

Specifies the mechanism to be used to restore this volume data.

See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#policy GoogleGkeBackupRestorePlan#policy}

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#volume_type GoogleGkeBackupRestorePlan#volume_type}

---

### GoogleGkeBackupRestorePlanTimeouts <a name="GoogleGkeBackupRestorePlanTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#create GoogleGkeBackupRestorePlan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#delete GoogleGkeBackupRestorePlan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#update GoogleGkeBackupRestorePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#create GoogleGkeBackupRestorePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#delete GoogleGkeBackupRestorePlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#update GoogleGkeBackupRestorePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds">put_excluded_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds">put_selected_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds">reset_all_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds">reset_excluded_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds">reset_no_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds">reset_selected_group_kinds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_group_kinds` <a name="put_excluded_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds"></a>

```python
def put_excluded_group_kinds(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---

##### `put_selected_group_kinds` <a name="put_selected_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds"></a>

```python
def put_selected_group_kinds(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---

##### `reset_all_group_kinds` <a name="reset_all_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds"></a>

```python
def reset_all_group_kinds() -> None
```

##### `reset_excluded_group_kinds` <a name="reset_excluded_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds"></a>

```python
def reset_excluded_group_kinds() -> None
```

##### `reset_no_group_kinds` <a name="reset_no_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds"></a>

```python
def reset_no_group_kinds() -> None
```

##### `reset_selected_group_kinds` <a name="reset_selected_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds"></a>

```python
def reset_selected_group_kinds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds">excluded_group_kinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds">selected_group_kinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput">all_group_kinds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput">excluded_group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput">no_group_kinds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput">selected_group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds">all_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds">no_group_kinds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_group_kinds`<sup>Required</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds"></a>

```python
excluded_group_kinds: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a>

---

##### `selected_group_kinds`<sup>Required</sup> <a name="selected_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds"></a>

```python
selected_group_kinds: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a>

---

##### `all_group_kinds_input`<sup>Optional</sup> <a name="all_group_kinds_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput"></a>

```python
all_group_kinds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excluded_group_kinds_input`<sup>Optional</sup> <a name="excluded_group_kinds_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput"></a>

```python
excluded_group_kinds_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

---

##### `no_group_kinds_input`<sup>Optional</sup> <a name="no_group_kinds_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput"></a>

```python
no_group_kinds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selected_group_kinds_input`<sup>Optional</sup> <a name="selected_group_kinds_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput"></a>

```python
selected_group_kinds_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---

##### `all_group_kinds`<sup>Required</sup> <a name="all_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds"></a>

```python
all_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_group_kinds`<sup>Required</sup> <a name="no_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds"></a>

```python
no_group_kinds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope">put_cluster_resource_restore_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces">put_excluded_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder">put_restore_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications">put_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces">put_selected_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules">put_transformation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings">put_volume_data_restore_policy_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces">reset_all_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy">reset_cluster_resource_conflict_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope">reset_cluster_resource_restore_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces">reset_excluded_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode">reset_namespaced_resource_restore_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces">reset_no_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder">reset_restore_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications">reset_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces">reset_selected_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules">reset_transformation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy">reset_volume_data_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings">reset_volume_data_restore_policy_bindings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_resource_restore_scope` <a name="put_cluster_resource_restore_scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope"></a>

```python
def put_cluster_resource_restore_scope(
  all_group_kinds: typing.Union[bool, IResolvable] = None,
  excluded_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds]] = None,
  no_group_kinds: typing.Union[bool, IResolvable] = None,
  selected_group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds]] = None
) -> None
```

###### `all_group_kinds`<sup>Optional</sup> <a name="all_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.allGroupKinds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#all_group_kinds GoogleGkeBackupRestorePlan#all_group_kinds}

---

###### `excluded_group_kinds`<sup>Optional</sup> <a name="excluded_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.excludedGroupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds</a>]]

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#excluded_group_kinds GoogleGkeBackupRestorePlan#excluded_group_kinds}

---

###### `no_group_kinds`<sup>Optional</sup> <a name="no_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.noGroupKinds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#no_group_kinds GoogleGkeBackupRestorePlan#no_group_kinds}

---

###### `selected_group_kinds`<sup>Optional</sup> <a name="selected_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.selectedGroupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds</a>]]

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#selected_group_kinds GoogleGkeBackupRestorePlan#selected_group_kinds}

---

##### `put_excluded_namespaces` <a name="put_excluded_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces"></a>

```python
def put_excluded_namespaces(
  namespaces: typing.List[str]
) -> None
```

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces.parameter.namespaces"></a>

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

##### `put_restore_order` <a name="put_restore_order" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder"></a>

```python
def put_restore_order(
  group_kind_dependencies: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
) -> None
```

###### `group_kind_dependencies`<sup>Required</sup> <a name="group_kind_dependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder.parameter.groupKindDependencies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]

group_kind_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#group_kind_dependencies GoogleGkeBackupRestorePlan#group_kind_dependencies}

---

##### `put_selected_applications` <a name="put_selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications"></a>

```python
def put_selected_applications(
  namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications.parameter.namespacedNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaced_names GoogleGkeBackupRestorePlan#namespaced_names}

---

##### `put_selected_namespaces` <a name="put_selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces"></a>

```python
def put_selected_namespaces(
  namespaces: typing.List[str]
) -> None
```

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces.parameter.namespaces"></a>

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

##### `put_transformation_rules` <a name="put_transformation_rules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules"></a>

```python
def put_transformation_rules(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---

##### `put_volume_data_restore_policy_bindings` <a name="put_volume_data_restore_policy_bindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings"></a>

```python
def put_volume_data_restore_policy_bindings(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]

---

##### `reset_all_namespaces` <a name="reset_all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces"></a>

```python
def reset_all_namespaces() -> None
```

##### `reset_cluster_resource_conflict_policy` <a name="reset_cluster_resource_conflict_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy"></a>

```python
def reset_cluster_resource_conflict_policy() -> None
```

##### `reset_cluster_resource_restore_scope` <a name="reset_cluster_resource_restore_scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope"></a>

```python
def reset_cluster_resource_restore_scope() -> None
```

##### `reset_excluded_namespaces` <a name="reset_excluded_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces"></a>

```python
def reset_excluded_namespaces() -> None
```

##### `reset_namespaced_resource_restore_mode` <a name="reset_namespaced_resource_restore_mode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode"></a>

```python
def reset_namespaced_resource_restore_mode() -> None
```

##### `reset_no_namespaces` <a name="reset_no_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces"></a>

```python
def reset_no_namespaces() -> None
```

##### `reset_restore_order` <a name="reset_restore_order" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder"></a>

```python
def reset_restore_order() -> None
```

##### `reset_selected_applications` <a name="reset_selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications"></a>

```python
def reset_selected_applications() -> None
```

##### `reset_selected_namespaces` <a name="reset_selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces"></a>

```python
def reset_selected_namespaces() -> None
```

##### `reset_transformation_rules` <a name="reset_transformation_rules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules"></a>

```python
def reset_transformation_rules() -> None
```

##### `reset_volume_data_restore_policy` <a name="reset_volume_data_restore_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy"></a>

```python
def reset_volume_data_restore_policy() -> None
```

##### `reset_volume_data_restore_policy_bindings` <a name="reset_volume_data_restore_policy_bindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings"></a>

```python
def reset_volume_data_restore_policy_bindings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope">cluster_resource_restore_scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces">excluded_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder">restore_order</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules">transformation_rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings">volume_data_restore_policy_bindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput">all_namespaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput">cluster_resource_conflict_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput">cluster_resource_restore_scope_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput">excluded_namespaces_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput">namespaced_resource_restore_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput">no_namespaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput">restore_order_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput">selected_applications_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput">selected_namespaces_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput">transformation_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput">volume_data_restore_policy_bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput">volume_data_restore_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy">cluster_resource_conflict_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode">namespaced_resource_restore_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces">no_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy">volume_data_restore_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_resource_restore_scope`<sup>Required</sup> <a name="cluster_resource_restore_scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope"></a>

```python
cluster_resource_restore_scope: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a>

---

##### `excluded_namespaces`<sup>Required</sup> <a name="excluded_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces"></a>

```python
excluded_namespaces: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a>

---

##### `restore_order`<sup>Required</sup> <a name="restore_order" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder"></a>

```python
restore_order: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a>

---

##### `selected_applications`<sup>Required</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications"></a>

```python
selected_applications: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a>

---

##### `selected_namespaces`<sup>Required</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces"></a>

```python
selected_namespaces: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a>

---

##### `transformation_rules`<sup>Required</sup> <a name="transformation_rules" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules"></a>

```python
transformation_rules: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList</a>

---

##### `volume_data_restore_policy_bindings`<sup>Required</sup> <a name="volume_data_restore_policy_bindings" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings"></a>

```python
volume_data_restore_policy_bindings: GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a>

---

##### `all_namespaces_input`<sup>Optional</sup> <a name="all_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput"></a>

```python
all_namespaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_resource_conflict_policy_input`<sup>Optional</sup> <a name="cluster_resource_conflict_policy_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput"></a>

```python
cluster_resource_conflict_policy_input: str
```

- *Type:* str

---

##### `cluster_resource_restore_scope_input`<sup>Optional</sup> <a name="cluster_resource_restore_scope_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput"></a>

```python
cluster_resource_restore_scope_input: GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GoogleGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `excluded_namespaces_input`<sup>Optional</sup> <a name="excluded_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput"></a>

```python
excluded_namespaces_input: GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `namespaced_resource_restore_mode_input`<sup>Optional</sup> <a name="namespaced_resource_restore_mode_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput"></a>

```python
namespaced_resource_restore_mode_input: str
```

- *Type:* str

---

##### `no_namespaces_input`<sup>Optional</sup> <a name="no_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput"></a>

```python
no_namespaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restore_order_input`<sup>Optional</sup> <a name="restore_order_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput"></a>

```python
restore_order_input: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---

##### `selected_applications_input`<sup>Optional</sup> <a name="selected_applications_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput"></a>

```python
selected_applications_input: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `selected_namespaces_input`<sup>Optional</sup> <a name="selected_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput"></a>

```python
selected_namespaces_input: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `transformation_rules_input`<sup>Optional</sup> <a name="transformation_rules_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput"></a>

```python
transformation_rules_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---

##### `volume_data_restore_policy_bindings_input`<sup>Optional</sup> <a name="volume_data_restore_policy_bindings_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput"></a>

```python
volume_data_restore_policy_bindings_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]

---

##### `volume_data_restore_policy_input`<sup>Optional</sup> <a name="volume_data_restore_policy_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput"></a>

```python
volume_data_restore_policy_input: str
```

- *Type:* str

---

##### `all_namespaces`<sup>Required</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_resource_conflict_policy`<sup>Required</sup> <a name="cluster_resource_conflict_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy"></a>

```python
cluster_resource_conflict_policy: str
```

- *Type:* str

---

##### `namespaced_resource_restore_mode`<sup>Required</sup> <a name="namespaced_resource_restore_mode" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode"></a>

```python
namespaced_resource_restore_mode: str
```

- *Type:* str

---

##### `no_namespaces`<sup>Required</sup> <a name="no_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces"></a>

```python
no_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_data_restore_policy`<sup>Required</sup> <a name="volume_data_restore_policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy"></a>

```python
volume_data_restore_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfig">GoogleGkeBackupRestorePlanRestoreConfig</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring">put_requiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying">put_satisfying</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_requiring` <a name="put_requiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring"></a>

```python
def put_requiring(
  resource_group: str = None,
  resource_kind: str = None
) -> None
```

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring.parameter.resourceGroup"></a>

- *Type:* str

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

###### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring.parameter.resourceKind"></a>

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---

##### `put_satisfying` <a name="put_satisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying"></a>

```python
def put_satisfying(
  resource_group: str = None,
  resource_kind: str = None
) -> None
```

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying.parameter.resourceGroup"></a>

- *Type:* str

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_group GoogleGkeBackupRestorePlan#resource_group}

---

###### `resource_kind`<sup>Optional</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying.parameter.resourceKind"></a>

- *Type:* str

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#resource_kind GoogleGkeBackupRestorePlan#resource_kind}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring">requiring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying">satisfying</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput">requiring_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput">satisfying_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `requiring`<sup>Required</sup> <a name="requiring" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring"></a>

```python
requiring: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a>

---

##### `satisfying`<sup>Required</sup> <a name="satisfying" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying"></a>

```python
satisfying: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a>

---

##### `requiring_input`<sup>Optional</sup> <a name="requiring_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput"></a>

```python
requiring_input: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---

##### `satisfying_input`<sup>Optional</sup> <a name="satisfying_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput"></a>

```python
satisfying_input: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies">put_group_kind_dependencies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_kind_dependencies` <a name="put_group_kind_dependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies"></a>

```python
def put_group_kind_dependencies(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies">group_kind_dependencies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput">group_kind_dependencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_kind_dependencies`<sup>Required</sup> <a name="group_kind_dependencies" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies"></a>

```python
group_kind_dependencies: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a>

---

##### `group_kind_dependencies_input`<sup>Optional</sup> <a name="group_kind_dependencies_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput"></a>

```python
group_kind_dependencies_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder">GoogleGkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames">put_namespaced_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaced_names` <a name="put_namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```python
def put_namespaced_names(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames">namespaced_names</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespaced_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```python
namespaced_names: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespaced_names_input`<sup>Optional</sup> <a name="namespaced_names_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```python
namespaced_names_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications">GoogleGkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces">GoogleGkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath">reset_from_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_path` <a name="reset_from_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath"></a>

```python
def reset_from_path() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput">from_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath">from_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_path_input`<sup>Optional</sup> <a name="from_path_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput"></a>

```python
from_path_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `from_path`<sup>Required</sup> <a name="from_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath"></a>

```python
from_path: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions">put_field_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter">put_resource_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter">reset_resource_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_actions` <a name="put_field_actions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions"></a>

```python
def put_field_actions(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---

##### `put_resource_filter` <a name="put_resource_filter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter"></a>

```python
def put_resource_filter(
  group_kinds: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]] = None,
  json_path: str = None,
  namespaces: typing.List[str] = None
) -> None
```

###### `group_kinds`<sup>Optional</sup> <a name="group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.groupKinds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#group_kinds GoogleGkeBackupRestorePlan#group_kinds}

---

###### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.jsonPath"></a>

- *Type:* str

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#json_path GoogleGkeBackupRestorePlan#json_path}

---

###### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.namespaces"></a>

- *Type:* typing.List[str]

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_gke_backup_restore_plan#namespaces GoogleGkeBackupRestorePlan#namespaces}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_resource_filter` <a name="reset_resource_filter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter"></a>

```python
def reset_resource_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions">field_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter">resource_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput">field_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput">resource_filter_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_actions`<sup>Required</sup> <a name="field_actions" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions"></a>

```python
field_actions: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a>

---

##### `resource_filter`<sup>Required</sup> <a name="resource_filter" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter"></a>

```python
resource_filter: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `field_actions_input`<sup>Optional</sup> <a name="field_actions_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput"></a>

```python
field_actions_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions</a>]]

---

##### `resource_filter_input`<sup>Optional</sup> <a name="resource_filter_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput"></a>

```python
resource_filter_input: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigTransformationRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRules">GoogleGkeBackupRestorePlanRestoreConfigTransformationRules</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind">reset_resource_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_kind` <a name="reset_resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind"></a>

```python
def reset_resource_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput">resource_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind">resource_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_kind_input`<sup>Optional</sup> <a name="resource_kind_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput"></a>

```python
resource_kind_input: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_kind`<sup>Required</sup> <a name="resource_kind" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind"></a>

```python
resource_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]

---


### GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds">put_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds">reset_group_kinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath">reset_json_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces">reset_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_kinds` <a name="put_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds"></a>

```python
def put_group_kinds(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---

##### `reset_group_kinds` <a name="reset_group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds"></a>

```python
def reset_group_kinds() -> None
```

##### `reset_json_path` <a name="reset_json_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath"></a>

```python
def reset_json_path() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds">group_kinds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput">group_kinds_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_kinds`<sup>Required</sup> <a name="group_kinds" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds"></a>

```python
group_kinds: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a>

---

##### `group_kinds_input`<sup>Optional</sup> <a name="group_kinds_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput"></a>

```python
group_kinds_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds</a>]]

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GoogleGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---


### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]]

---


### GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference <a name="GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings">GoogleGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings</a>]

---


### GoogleGkeBackupRestorePlanTimeoutsOutputReference <a name="GoogleGkeBackupRestorePlanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_restore_plan

googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeBackupRestorePlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlan.GoogleGkeBackupRestorePlanTimeouts">GoogleGkeBackupRestorePlanTimeouts</a>]

---



