# `googleSpannerBackupSchedule` Submodule <a name="`googleSpannerBackupSchedule` Submodule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerBackupSchedule <a name="GoogleSpannerBackupSchedule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  instance: str,
  retention_duration: str,
  encryption_config: GoogleSpannerBackupScheduleEncryptionConfig = None,
  full_backup_spec: GoogleSpannerBackupScheduleFullBackupSpec = None,
  id: str = None,
  incremental_backup_spec: GoogleSpannerBackupScheduleIncrementalBackupSpec = None,
  name: str = None,
  project: str = None,
  spec: GoogleSpannerBackupScheduleSpec = None,
  timeouts: GoogleSpannerBackupScheduleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.database">database</a></code> | <code>str</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.retentionDuration">retention_duration</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.database"></a>

- *Type:* str

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.retentionDuration"></a>

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}

---

##### `full_backup_spec`<sup>Optional</sup> <a name="full_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.fullBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_backup_spec`<sup>Optional</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec">put_full_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec">put_incremental_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec">reset_full_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec">reset_incremental_backup_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig"></a>

```python
def put_encryption_config(
  encryption_type: str,
  kms_key_name: str = None
) -> None
```

###### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig.parameter.encryptionType"></a>

- *Type:* str

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#encryption_type GoogleSpannerBackupSchedule#encryption_type}

---

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#kms_key_name GoogleSpannerBackupSchedule#kms_key_name}

---

##### `put_full_backup_spec` <a name="put_full_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec"></a>

```python
def put_full_backup_spec() -> None
```

##### `put_incremental_backup_spec` <a name="put_incremental_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec"></a>

```python
def put_incremental_backup_spec() -> None
```

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec"></a>

```python
def put_spec(
  cron_spec: GoogleSpannerBackupScheduleSpecCronSpec = None
) -> None
```

###### `cron_spec`<sup>Optional</sup> <a name="cron_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec.parameter.cronSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}.

---

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_full_backup_spec` <a name="reset_full_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec"></a>

```python
def reset_full_backup_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incremental_backup_spec` <a name="reset_incremental_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```python
def reset_incremental_backup_spec() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSpannerBackupSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput">full_backup_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput">incremental_backup_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput">retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration">retention_duration</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig"></a>

```python
encryption_config: GoogleSpannerBackupScheduleEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a>

---

##### `full_backup_spec`<sup>Required</sup> <a name="full_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec"></a>

```python
full_backup_spec: GoogleSpannerBackupScheduleFullBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `incremental_backup_spec`<sup>Required</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec"></a>

```python
incremental_backup_spec: GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec"></a>

```python
spec: GoogleSpannerBackupScheduleSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts"></a>

```python
timeouts: GoogleSpannerBackupScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---

##### `full_backup_spec_input`<sup>Optional</sup> <a name="full_backup_spec_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput"></a>

```python
full_backup_spec_input: GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incremental_backup_spec_input`<sup>Optional</sup> <a name="incremental_backup_spec_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```python
incremental_backup_spec_input: GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_duration_input`<sup>Optional</sup> <a name="retention_duration_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput"></a>

```python
retention_duration_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput"></a>

```python
spec_input: GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSpannerBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration"></a>

```python
retention_duration: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerBackupScheduleConfig <a name="GoogleSpannerBackupScheduleConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  instance: str,
  retention_duration: str,
  encryption_config: GoogleSpannerBackupScheduleEncryptionConfig = None,
  full_backup_spec: GoogleSpannerBackupScheduleFullBackupSpec = None,
  id: str = None,
  incremental_backup_spec: GoogleSpannerBackupScheduleIncrementalBackupSpec = None,
  name: str = None,
  project: str = None,
  spec: GoogleSpannerBackupScheduleSpec = None,
  timeouts: GoogleSpannerBackupScheduleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database">database</a></code> | <code>str</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration">retention_duration</a></code> | <code>str</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec">full_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec">incremental_backup_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration"></a>

```python
retention_duration: str
```

- *Type:* str

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}

---

##### `full_backup_spec`<sup>Optional</sup> <a name="full_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```python
full_backup_spec: GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_backup_spec`<sup>Optional</sup> <a name="incremental_backup_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```python
incremental_backup_spec: GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec"></a>

```python
spec: GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts"></a>

```python
timeouts: GoogleSpannerBackupScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

### GoogleSpannerBackupScheduleEncryptionConfig <a name="GoogleSpannerBackupScheduleEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig(
  encryption_type: str,
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | The encryption type of backups created by the backup schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'. |

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#encryption_type GoogleSpannerBackupSchedule#encryption_type}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#kms_key_name GoogleSpannerBackupSchedule#kms_key_name}

---

### GoogleSpannerBackupScheduleFullBackupSpec <a name="GoogleSpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec()
```


### GoogleSpannerBackupScheduleIncrementalBackupSpec <a name="GoogleSpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec()
```


### GoogleSpannerBackupScheduleSpec <a name="GoogleSpannerBackupScheduleSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec(
  cron_spec: GoogleSpannerBackupScheduleSpecCronSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec">cron_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `cron_spec`<sup>Optional</sup> <a name="cron_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec"></a>

```python
cron_spec: GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}

---

### GoogleSpannerBackupScheduleSpecCronSpec <a name="GoogleSpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text">text</a></code> | <code>str</code> | Textual representation of the crontab. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text"></a>

```python
text: str
```

- *Type:* str

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}

---

### GoogleSpannerBackupScheduleTimeouts <a name="GoogleSpannerBackupScheduleTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerBackupScheduleEncryptionConfigOutputReference <a name="GoogleSpannerBackupScheduleEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---


### GoogleSpannerBackupScheduleFullBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---


### GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---


### GoogleSpannerBackupScheduleSpecCronSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---


### GoogleSpannerBackupScheduleSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec">put_cron_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec">reset_cron_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cron_spec` <a name="put_cron_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```python
def put_cron_spec(
  text: str = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.text"></a>

- *Type:* str

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}

---

##### `reset_cron_spec` <a name="reset_cron_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```python
def reset_cron_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec">cron_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput">cron_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_spec`<sup>Required</sup> <a name="cron_spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```python
cron_spec: GoogleSpannerBackupScheduleSpecCronSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `cron_spec_input`<sup>Optional</sup> <a name="cron_spec_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```python
cron_spec_input: GoogleSpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---


### GoogleSpannerBackupScheduleTimeoutsOutputReference <a name="GoogleSpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_backup_schedule

googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSpannerBackupScheduleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>]

---



