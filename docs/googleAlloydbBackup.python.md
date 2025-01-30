# `googleAlloydbBackup` Submodule <a name="`googleAlloydbBackup` Submodule" id="@cdktf/provider-google-beta.googleAlloydbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbBackup <a name="GoogleAlloydbBackup" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup google_alloydb_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_id: str,
  cluster_name: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  encryption_config: GoogleAlloydbBackupEncryptionConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleAlloydbBackupTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | The ID of the alloydb backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}). |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the alloydb backup should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#id GoogleAlloydbBackup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#project GoogleAlloydbBackup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.type">type</a></code> | <code>str</code> | The backup type, which suggests the trigger for the backup. Possible values: ["TYPE_UNSPECIFIED", "ON_DEMAND", "AUTOMATED", "CONTINUOUS"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.backupId"></a>

- *Type:* str

The ID of the alloydb backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#backup_id GoogleAlloydbBackup#backup_id}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.clusterName"></a>

- *Type:* str

The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#cluster_name GoogleAlloydbBackup#cluster_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.location"></a>

- *Type:* str

The location where the alloydb backup should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#location GoogleAlloydbBackup#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#annotations GoogleAlloydbBackup#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#description GoogleAlloydbBackup#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.displayName"></a>

- *Type:* str

User-settable and human-readable display name for the Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#display_name GoogleAlloydbBackup#display_name}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#encryption_config GoogleAlloydbBackup#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#id GoogleAlloydbBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb backup.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#labels GoogleAlloydbBackup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#project GoogleAlloydbBackup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#timeouts GoogleAlloydbBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.Initializer.parameter.type"></a>

- *Type:* str

The backup type, which suggests the trigger for the backup. Possible values: ["TYPE_UNSPECIFIED", "ON_DEMAND", "AUTOMATED", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#type GoogleAlloydbBackup#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#kms_key_name GoogleAlloydbBackup#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#create GoogleAlloydbBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#delete GoogleAlloydbBackup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#update GoogleAlloydbBackup#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAlloydbBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAlloydbBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAlloydbBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAlloydbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterUid">cluster_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference">GoogleAlloydbBackupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionInfo">encryption_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList">GoogleAlloydbBackupEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.expiryQuantity">expiry_quantity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList">GoogleAlloydbBackupExpiryQuantityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.expiryTime">expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.sizeBytes">size_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference">GoogleAlloydbBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_uid`<sup>Required</sup> <a name="cluster_uid" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterUid"></a>

```python
cluster_uid: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionConfig"></a>

```python
encryption_config: GoogleAlloydbBackupEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference">GoogleAlloydbBackupEncryptionConfigOutputReference</a>

---

##### `encryption_info`<sup>Required</sup> <a name="encryption_info" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionInfo"></a>

```python
encryption_info: GoogleAlloydbBackupEncryptionInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList">GoogleAlloydbBackupEncryptionInfoList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expiry_quantity`<sup>Required</sup> <a name="expiry_quantity" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.expiryQuantity"></a>

```python
expiry_quantity: GoogleAlloydbBackupExpiryQuantityList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList">GoogleAlloydbBackupExpiryQuantityList</a>

---

##### `expiry_time`<sup>Required</sup> <a name="expiry_time" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.expiryTime"></a>

```python
expiry_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.sizeBytes"></a>

```python
size_bytes: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.timeouts"></a>

```python
timeouts: GoogleAlloydbBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference">GoogleAlloydbBackupTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleAlloydbBackupEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAlloydbBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbBackupConfig <a name="GoogleAlloydbBackupConfig" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_id: str,
  cluster_name: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  encryption_config: GoogleAlloydbBackupEncryptionConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleAlloydbBackupTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.backupId">backup_id</a></code> | <code>str</code> | The ID of the alloydb backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}). |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.location">location</a></code> | <code>str</code> | The location where the alloydb backup should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#id GoogleAlloydbBackup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb backup. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#project GoogleAlloydbBackup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.type">type</a></code> | <code>str</code> | The backup type, which suggests the trigger for the backup. Possible values: ["TYPE_UNSPECIFIED", "ON_DEMAND", "AUTOMATED", "CONTINUOUS"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

The ID of the alloydb backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#backup_id GoogleAlloydbBackup#backup_id}

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#cluster_name GoogleAlloydbBackup#cluster_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the alloydb backup should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#location GoogleAlloydbBackup#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#annotations GoogleAlloydbBackup#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#description GoogleAlloydbBackup#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-settable and human-readable display name for the Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#display_name GoogleAlloydbBackup#display_name}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleAlloydbBackupEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#encryption_config GoogleAlloydbBackup#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#id GoogleAlloydbBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb backup.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#labels GoogleAlloydbBackup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#project GoogleAlloydbBackup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.timeouts"></a>

```python
timeouts: GoogleAlloydbBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#timeouts GoogleAlloydbBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The backup type, which suggests the trigger for the backup. Possible values: ["TYPE_UNSPECIFIED", "ON_DEMAND", "AUTOMATED", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#type GoogleAlloydbBackup#type}

---

### GoogleAlloydbBackupEncryptionConfig <a name="GoogleAlloydbBackupEncryptionConfig" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The fully-qualified resource name of the KMS key. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#kms_key_name GoogleAlloydbBackup#kms_key_name}

---

### GoogleAlloydbBackupEncryptionInfo <a name="GoogleAlloydbBackupEncryptionInfo" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfo()
```


### GoogleAlloydbBackupExpiryQuantity <a name="GoogleAlloydbBackupExpiryQuantity" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantity()
```


### GoogleAlloydbBackupTimeouts <a name="GoogleAlloydbBackupTimeouts" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#create GoogleAlloydbBackup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#delete GoogleAlloydbBackup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#update GoogleAlloydbBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#create GoogleAlloydbBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#delete GoogleAlloydbBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_alloydb_backup#update GoogleAlloydbBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbBackupEncryptionConfigOutputReference <a name="GoogleAlloydbBackupEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbBackupEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionConfig">GoogleAlloydbBackupEncryptionConfig</a>

---


### GoogleAlloydbBackupEncryptionInfoList <a name="GoogleAlloydbBackupEncryptionInfoList" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAlloydbBackupEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleAlloydbBackupEncryptionInfoOutputReference <a name="GoogleAlloydbBackupEncryptionInfoOutputReference" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.kmsKeyVersions">kms_key_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfo">GoogleAlloydbBackupEncryptionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_versions`<sup>Required</sup> <a name="kms_key_versions" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```python
kms_key_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbBackupEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupEncryptionInfo">GoogleAlloydbBackupEncryptionInfo</a>

---


### GoogleAlloydbBackupExpiryQuantityList <a name="GoogleAlloydbBackupExpiryQuantityList" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAlloydbBackupExpiryQuantityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleAlloydbBackupExpiryQuantityOutputReference <a name="GoogleAlloydbBackupExpiryQuantityOutputReference" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.retentionCount">retention_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.totalRetentionCount">total_retention_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantity">GoogleAlloydbBackupExpiryQuantity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_count`<sup>Required</sup> <a name="retention_count" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.retentionCount"></a>

```python
retention_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_retention_count`<sup>Required</sup> <a name="total_retention_count" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.totalRetentionCount"></a>

```python
total_retention_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbBackupExpiryQuantity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupExpiryQuantity">GoogleAlloydbBackupExpiryQuantity</a>

---


### GoogleAlloydbBackupTimeoutsOutputReference <a name="GoogleAlloydbBackupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_backup

googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAlloydbBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbBackup.GoogleAlloydbBackupTimeouts">GoogleAlloydbBackupTimeouts</a>]

---



