# `google_gke_backup_backup_plan`

Refer to the Terraform Registory for docs: [`google_gke_backup_backup_plan`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan).

# `googleGkeBackupBackupPlan` Submodule <a name="`googleGkeBackupBackupPlan` Submodule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupBackupPlan <a name="GoogleGkeBackupBackupPlan" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  backup_config: GoogleGkeBackupBackupPlanBackupConfig = None,
  backup_schedule: GoogleGkeBackupBackupPlanBackupSchedule = None,
  deactivated: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  retention_policy: GoogleGkeBackupBackupPlanRetentionPolicy = None,
  timeouts: GoogleGkeBackupBackupPlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the Backup Plan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupSchedule">backup_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deactivated">deactivated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.description">description</a></code> | <code>str</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.cluster"></a>

- *Type:* str

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#cluster GoogleGkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.location"></a>

- *Type:* str

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#location GoogleGkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.name"></a>

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_config GoogleGkeBackupBackupPlan#backup_config}

---

##### `backup_schedule`<sup>Optional</sup> <a name="backup_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_schedule GoogleGkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deactivated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#deactivated GoogleGkeBackupBackupPlan#deactivated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.description"></a>

- *Type:* str

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#description GoogleGkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#labels GoogleGkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#retention_policy GoogleGkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#timeouts GoogleGkeBackupBackupPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig">put_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule">put_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig">reset_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule">reset_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated">reset_deactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy">reset_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_backup_config` <a name="put_backup_config" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig"></a>

```python
def put_backup_config(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  encryption_key: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey = None,
  include_secrets: typing.Union[bool, IResolvable] = None,
  include_volume_data: typing.Union[bool, IResolvable] = None,
  selected_applications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications = None,
  selected_namespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces = None
) -> None
```

###### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.allNamespaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#all_namespaces GoogleGkeBackupBackupPlan#all_namespaces}

---

###### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#encryption_key GoogleGkeBackupBackupPlan#encryption_key}

---

###### `include_secrets`<sup>Optional</sup> <a name="include_secrets" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.includeSecrets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#include_secrets GoogleGkeBackupBackupPlan#include_secrets}

---

###### `include_volume_data`<sup>Optional</sup> <a name="include_volume_data" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.includeVolumeData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#include_volume_data GoogleGkeBackupBackupPlan#include_volume_data}

---

###### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.selectedApplications"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#selected_applications GoogleGkeBackupBackupPlan#selected_applications}

---

###### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.selectedNamespaces"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#selected_namespaces GoogleGkeBackupBackupPlan#selected_namespaces}

---

##### `put_backup_schedule` <a name="put_backup_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule"></a>

```python
def put_backup_schedule(
  cron_schedule: str = None,
  paused: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule.parameter.cronSchedule"></a>

- *Type:* str

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#cron_schedule GoogleGkeBackupBackupPlan#cron_schedule}

---

###### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule.parameter.paused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#paused GoogleGkeBackupBackupPlan#paused}

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy"></a>

```python
def put_retention_policy(
  backup_delete_lock_days: typing.Union[int, float] = None,
  backup_retain_days: typing.Union[int, float] = None,
  locked: typing.Union[bool, IResolvable] = None
) -> None
```

###### `backup_delete_lock_days`<sup>Optional</sup> <a name="backup_delete_lock_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy.parameter.backupDeleteLockDays"></a>

- *Type:* typing.Union[int, float]

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_delete_lock_days GoogleGkeBackupBackupPlan#backup_delete_lock_days}

---

###### `backup_retain_days`<sup>Optional</sup> <a name="backup_retain_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy.parameter.backupRetainDays"></a>

- *Type:* typing.Union[int, float]

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_retain_days GoogleGkeBackupBackupPlan#backup_retain_days}

---

###### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy.parameter.locked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#locked GoogleGkeBackupBackupPlan#locked}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}.

---

##### `reset_backup_config` <a name="reset_backup_config" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig"></a>

```python
def reset_backup_config() -> None
```

##### `reset_backup_schedule` <a name="reset_backup_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule"></a>

```python
def reset_backup_schedule() -> None
```

##### `reset_deactivated` <a name="reset_deactivated" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated"></a>

```python
def reset_deactivated() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_retention_policy` <a name="reset_retention_policy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy"></a>

```python
def reset_retention_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule">backup_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount">protected_pod_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput">backup_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput">backup_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput">deactivated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated">deactivated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig"></a>

```python
backup_config: GoogleGkeBackupBackupPlanBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `backup_schedule`<sup>Required</sup> <a name="backup_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule"></a>

```python
backup_schedule: GoogleGkeBackupBackupPlanBackupScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `protected_pod_count`<sup>Required</sup> <a name="protected_pod_count" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount"></a>

```python
protected_pod_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy"></a>

```python
retention_policy: GoogleGkeBackupBackupPlanRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupBackupPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `backup_config_input`<sup>Optional</sup> <a name="backup_config_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput"></a>

```python
backup_config_input: GoogleGkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---

##### `backup_schedule_input`<sup>Optional</sup> <a name="backup_schedule_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput"></a>

```python
backup_schedule_input: GoogleGkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `deactivated_input`<sup>Optional</sup> <a name="deactivated_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput"></a>

```python
deactivated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput"></a>

```python
retention_policy_input: GoogleGkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleGkeBackupBackupPlanTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>, cdktf.IResolvable]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated"></a>

```python
deactivated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupBackupPlanBackupConfig <a name="GoogleGkeBackupBackupPlanBackupConfig" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig(
  all_namespaces: typing.Union[bool, IResolvable] = None,
  encryption_key: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey = None,
  include_secrets: typing.Union[bool, IResolvable] = None,
  include_volume_data: typing.Union[bool, IResolvable] = None,
  selected_applications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications = None,
  selected_namespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets">include_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData">include_volume_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `all_namespaces`<sup>Optional</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#all_namespaces GoogleGkeBackupBackupPlan#all_namespaces}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```python
encryption_key: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#encryption_key GoogleGkeBackupBackupPlan#encryption_key}

---

##### `include_secrets`<sup>Optional</sup> <a name="include_secrets" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```python
include_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#include_secrets GoogleGkeBackupBackupPlan#include_secrets}

---

##### `include_volume_data`<sup>Optional</sup> <a name="include_volume_data" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```python
include_volume_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#include_volume_data GoogleGkeBackupBackupPlan#include_volume_data}

---

##### `selected_applications`<sup>Optional</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```python
selected_applications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#selected_applications GoogleGkeBackupBackupPlan#selected_applications}

---

##### `selected_namespaces`<sup>Optional</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```python
selected_namespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#selected_namespaces GoogleGkeBackupBackupPlan#selected_namespaces}

---

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKey <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey(
  gcp_kms_encryption_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">gcp_kms_encryption_key</a></code> | <code>str</code> | Google Cloud KMS encryption key. Format: projects/*\/locations/*\/keyRings/*\/cryptoKeys/*. |

---

##### `gcp_kms_encryption_key`<sup>Required</sup> <a name="gcp_kms_encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```python
gcp_kms_encryption_key: str
```

- *Type:* str

Google Cloud KMS encryption key. Format: projects/*\/locations/*\/keyRings/*\/cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#gcp_kms_encryption_key GoogleGkeBackupBackupPlan#gcp_kms_encryption_key}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplications <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications(
  namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">namespaced_names</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]</code> | namespaced_names block. |

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```python
namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#namespaced_names GoogleGkeBackupBackupPlan#namespaced_names}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames(
  name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>str</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>str</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#namespace GoogleGkeBackupBackupPlan#namespace}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces(
  namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#namespaces GoogleGkeBackupBackupPlan#namespaces}

---

### GoogleGkeBackupBackupPlanBackupSchedule <a name="GoogleGkeBackupBackupPlanBackupSchedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule(
  cron_schedule: str = None,
  paused: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#cron_schedule GoogleGkeBackupBackupPlan#cron_schedule}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#paused GoogleGkeBackupBackupPlan#paused}

---

### GoogleGkeBackupBackupPlanConfig <a name="GoogleGkeBackupBackupPlanConfig" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  backup_config: GoogleGkeBackupBackupPlanBackupConfig = None,
  backup_schedule: GoogleGkeBackupBackupPlanBackupSchedule = None,
  deactivated: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  retention_policy: GoogleGkeBackupBackupPlanRetentionPolicy = None,
  timeouts: GoogleGkeBackupBackupPlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster">cluster</a></code> | <code>str</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location">location</a></code> | <code>str</code> | The region of the Backup Plan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name">name</a></code> | <code>str</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule">backup_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated">deactivated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description">description</a></code> | <code>str</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#cluster GoogleGkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#location GoogleGkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig"></a>

```python
backup_config: GoogleGkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_config GoogleGkeBackupBackupPlan#backup_config}

---

##### `backup_schedule`<sup>Optional</sup> <a name="backup_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule"></a>

```python
backup_schedule: GoogleGkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_schedule GoogleGkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated"></a>

```python
deactivated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#deactivated GoogleGkeBackupBackupPlan#deactivated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#description GoogleGkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#labels GoogleGkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}.

---

##### `retention_policy`<sup>Optional</sup> <a name="retention_policy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```python
retention_policy: GoogleGkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#retention_policy GoogleGkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeBackupBackupPlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#timeouts GoogleGkeBackupBackupPlan#timeouts}

---

### GoogleGkeBackupBackupPlanRetentionPolicy <a name="GoogleGkeBackupBackupPlanRetentionPolicy" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy(
  backup_delete_lock_days: typing.Union[int, float] = None,
  backup_retain_days: typing.Union[int, float] = None,
  locked: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">backup_delete_lock_days</a></code> | <code>typing.Union[int, float]</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">backup_retain_days</a></code> | <code>typing.Union[int, float]</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `backup_delete_lock_days`<sup>Optional</sup> <a name="backup_delete_lock_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```python
backup_delete_lock_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_delete_lock_days GoogleGkeBackupBackupPlan#backup_delete_lock_days}

---

##### `backup_retain_days`<sup>Optional</sup> <a name="backup_retain_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```python
backup_retain_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#backup_retain_days GoogleGkeBackupBackupPlan#backup_retain_days}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#locked GoogleGkeBackupBackupPlan#locked}

---

### GoogleGkeBackupBackupPlanTimeouts <a name="GoogleGkeBackupBackupPlanTimeouts" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">gcp_kms_encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">gcp_kms_encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_kms_encryption_key_input`<sup>Optional</sup> <a name="gcp_kms_encryption_key_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```python
gcp_kms_encryption_key_input: str
```

- *Type:* str

---

##### `gcp_kms_encryption_key`<sup>Required</sup> <a name="gcp_kms_encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```python
gcp_kms_encryption_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GoogleGkeBackupBackupPlanBackupConfigOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">put_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">put_selected_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">reset_all_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">reset_include_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">reset_include_volume_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">reset_selected_applications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">reset_selected_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```python
def put_encryption_key(
  gcp_kms_encryption_key: str
) -> None
```

###### `gcp_kms_encryption_key`<sup>Required</sup> <a name="gcp_kms_encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.gcpKmsEncryptionKey"></a>

- *Type:* str

Google Cloud KMS encryption key. Format: projects/*\/locations/*\/keyRings/*\/cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#gcp_kms_encryption_key GoogleGkeBackupBackupPlan#gcp_kms_encryption_key}

---

##### `put_selected_applications` <a name="put_selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```python
def put_selected_applications(
  namespaced_names: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.namespacedNames"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#namespaced_names GoogleGkeBackupBackupPlan#namespaced_names}

---

##### `put_selected_namespaces` <a name="put_selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```python
def put_selected_namespaces(
  namespaces: typing.List[str]
) -> None
```

###### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.namespaces"></a>

- *Type:* typing.List[str]

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_gke_backup_backup_plan#namespaces GoogleGkeBackupBackupPlan#namespaces}

---

##### `reset_all_namespaces` <a name="reset_all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```python
def reset_all_namespaces() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_include_secrets` <a name="reset_include_secrets" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```python
def reset_include_secrets() -> None
```

##### `reset_include_volume_data` <a name="reset_include_volume_data" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```python
def reset_include_volume_data() -> None
```

##### `reset_selected_applications` <a name="reset_selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```python
def reset_selected_applications() -> None
```

##### `reset_selected_namespaces` <a name="reset_selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```python
def reset_selected_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">selected_applications</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">selected_namespaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">all_namespaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">include_secrets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">include_volume_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">selected_applications_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">selected_namespaces_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">all_namespaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">include_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">include_volume_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```python
encryption_key: GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `selected_applications`<sup>Required</sup> <a name="selected_applications" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```python
selected_applications: GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `selected_namespaces`<sup>Required</sup> <a name="selected_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```python
selected_namespaces: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `all_namespaces_input`<sup>Optional</sup> <a name="all_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```python
all_namespaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: GoogleGkeBackupBackupPlanBackupConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `include_secrets_input`<sup>Optional</sup> <a name="include_secrets_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```python
include_secrets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_volume_data_input`<sup>Optional</sup> <a name="include_volume_data_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```python
include_volume_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `selected_applications_input`<sup>Optional</sup> <a name="selected_applications_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```python
selected_applications_input: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `selected_namespaces_input`<sup>Optional</sup> <a name="selected_namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```python
selected_namespaces_input: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `all_namespaces`<sup>Required</sup> <a name="all_namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```python
all_namespaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_secrets`<sup>Required</sup> <a name="include_secrets" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```python
include_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_volume_data`<sup>Required</sup> <a name="include_volume_data" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```python
include_volume_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>, cdktf.IResolvable]

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">put_namespaced_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaced_names` <a name="put_namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```python
def put_namespaced_names(
  value: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">namespaced_names</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespaced_names_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaced_names`<sup>Required</sup> <a name="namespaced_names" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```python
namespaced_names: GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespaced_names_input`<sup>Optional</sup> <a name="namespaced_names_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```python
namespaced_names_input: typing.Union[IResolvable, typing.List[GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanBackupConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">reset_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">reset_paused</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron_schedule` <a name="reset_cron_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```python
def reset_cron_schedule() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```python
def reset_paused() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_schedule_input`<sup>Optional</sup> <a name="cron_schedule_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```python
cron_schedule_input: str
```

- *Type:* str

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```python
paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---


### GoogleGkeBackupBackupPlanRetentionPolicyOutputReference <a name="GoogleGkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">reset_backup_delete_lock_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">reset_backup_retain_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">reset_locked</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_delete_lock_days` <a name="reset_backup_delete_lock_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```python
def reset_backup_delete_lock_days() -> None
```

##### `reset_backup_retain_days` <a name="reset_backup_retain_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```python
def reset_backup_retain_days() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```python
def reset_locked() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">backup_delete_lock_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">backup_retain_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">backup_delete_lock_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">backup_retain_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_delete_lock_days_input`<sup>Optional</sup> <a name="backup_delete_lock_days_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```python
backup_delete_lock_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retain_days_input`<sup>Optional</sup> <a name="backup_retain_days_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```python
backup_retain_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```python
locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_delete_lock_days`<sup>Required</sup> <a name="backup_delete_lock_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```python
backup_delete_lock_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retain_days`<sup>Required</sup> <a name="backup_retain_days" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```python
backup_retain_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeBackupBackupPlanRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---


### GoogleGkeBackupBackupPlanTimeoutsOutputReference <a name="GoogleGkeBackupBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gke_backup_backup_plan

googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleGkeBackupBackupPlanTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>, cdktf.IResolvable]

---



