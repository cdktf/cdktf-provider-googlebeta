# `googleFirestoreDatabase` Submodule <a name="`googleFirestoreDatabase` Submodule" id="@cdktf/provider-google-beta.googleFirestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreDatabase <a name="GoogleFirestoreDatabase" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location_id: str,
  name: str,
  type: str,
  app_engine_integration_mode: str = None,
  cmek_config: GoogleFirestoreDatabaseCmekConfig = None,
  concurrency_mode: str = None,
  delete_protection_state: str = None,
  deletion_policy: str = None,
  id: str = None,
  point_in_time_recovery_enablement: str = None,
  project: str = None,
  timeouts: GoogleFirestoreDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.locationId">location_id</a></code> | <code>str</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.appEngineIntegrationMode">app_engine_integration_mode</a></code> | <code>str</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.cmekConfig">cmek_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.deleteProtectionState">delete_protection_state</a></code> | <code>str</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.pointInTimeRecoveryEnablement">point_in_time_recovery_enablement</a></code> | <code>str</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location_id`<sup>Required</sup> <a name="location_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.locationId"></a>

- *Type:* str

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#location_id GoogleFirestoreDatabase#location_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.name"></a>

- *Type:* str

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#name GoogleFirestoreDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.type"></a>

- *Type:* str

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#type GoogleFirestoreDatabase#type}

---

##### `app_engine_integration_mode`<sup>Optional</sup> <a name="app_engine_integration_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.appEngineIntegrationMode"></a>

- *Type:* str

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#app_engine_integration_mode GoogleFirestoreDatabase#app_engine_integration_mode}

---

##### `cmek_config`<sup>Optional</sup> <a name="cmek_config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.cmekConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#cmek_config GoogleFirestoreDatabase#cmek_config}

---

##### `concurrency_mode`<sup>Optional</sup> <a name="concurrency_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.concurrencyMode"></a>

- *Type:* str

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#concurrency_mode GoogleFirestoreDatabase#concurrency_mode}

---

##### `delete_protection_state`<sup>Optional</sup> <a name="delete_protection_state" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.deleteProtectionState"></a>

- *Type:* str

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#delete_protection_state GoogleFirestoreDatabase#delete_protection_state}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#deletion_policy GoogleFirestoreDatabase#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `point_in_time_recovery_enablement`<sup>Optional</sup> <a name="point_in_time_recovery_enablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.pointInTimeRecoveryEnablement"></a>

- *Type:* str

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#point_in_time_recovery_enablement GoogleFirestoreDatabase#point_in_time_recovery_enablement}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#timeouts GoogleFirestoreDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig">put_cmek_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode">reset_app_engine_integration_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetCmekConfig">reset_cmek_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode">reset_concurrency_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeleteProtectionState">reset_delete_protection_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetPointInTimeRecoveryEnablement">reset_point_in_time_recovery_enablement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cmek_config` <a name="put_cmek_config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig"></a>

```python
def put_cmek_config(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putCmekConfig.parameter.kmsKeyName"></a>

- *Type:* str

The resource ID of a Cloud KMS key.

If set, the database created will
be a Customer-managed Encryption Key (CMEK) database encrypted with
this key. This feature is allowlist only in initial launch.

Only keys in the same location as this database are allowed to be used
for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
multi-region us. For Firestore's eur3 multi-region, this corresponds to
Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.

This value should be the KMS key resource ID in the format of
'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
How to retrieve this resource ID is listed at
https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#kms_key_name GoogleFirestoreDatabase#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}.

---

##### `reset_app_engine_integration_mode` <a name="reset_app_engine_integration_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetAppEngineIntegrationMode"></a>

```python
def reset_app_engine_integration_mode() -> None
```

##### `reset_cmek_config` <a name="reset_cmek_config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetCmekConfig"></a>

```python
def reset_cmek_config() -> None
```

##### `reset_concurrency_mode` <a name="reset_concurrency_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetConcurrencyMode"></a>

```python
def reset_concurrency_mode() -> None
```

##### `reset_delete_protection_state` <a name="reset_delete_protection_state" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeleteProtectionState"></a>

```python
def reset_delete_protection_state() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_point_in_time_recovery_enablement` <a name="reset_point_in_time_recovery_enablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetPointInTimeRecoveryEnablement"></a>

```python
def reset_point_in_time_recovery_enablement() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirestoreDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirestoreDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirestoreDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirestoreDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfig">cmek_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference">GoogleFirestoreDatabaseCmekConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.earliestVersionTime">earliest_version_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.versionRetentionPeriod">version_retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput">app_engine_integration_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfigInput">cmek_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput">concurrency_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionStateInput">delete_protection_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput">location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablementInput">point_in_time_recovery_enablement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode">app_engine_integration_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionState">delete_protection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId">location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablement">point_in_time_recovery_enablement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cmek_config`<sup>Required</sup> <a name="cmek_config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfig"></a>

```python
cmek_config: GoogleFirestoreDatabaseCmekConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference">GoogleFirestoreDatabaseCmekConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `earliest_version_time`<sup>Required</sup> <a name="earliest_version_time" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.earliestVersionTime"></a>

```python
earliest_version_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeouts"></a>

```python
timeouts: GoogleFirestoreDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference">GoogleFirestoreDatabaseTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version_retention_period`<sup>Required</sup> <a name="version_retention_period" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.versionRetentionPeriod"></a>

```python
version_retention_period: str
```

- *Type:* str

---

##### `app_engine_integration_mode_input`<sup>Optional</sup> <a name="app_engine_integration_mode_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```python
app_engine_integration_mode_input: str
```

- *Type:* str

---

##### `cmek_config_input`<sup>Optional</sup> <a name="cmek_config_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.cmekConfigInput"></a>

```python
cmek_config_input: GoogleFirestoreDatabaseCmekConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

---

##### `concurrency_mode_input`<sup>Optional</sup> <a name="concurrency_mode_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyModeInput"></a>

```python
concurrency_mode_input: str
```

- *Type:* str

---

##### `delete_protection_state_input`<sup>Optional</sup> <a name="delete_protection_state_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionStateInput"></a>

```python
delete_protection_state_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_id_input`<sup>Optional</sup> <a name="location_id_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationIdInput"></a>

```python
location_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `point_in_time_recovery_enablement_input`<sup>Optional</sup> <a name="point_in_time_recovery_enablement_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablementInput"></a>

```python
point_in_time_recovery_enablement_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirestoreDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `app_engine_integration_mode`<sup>Required</sup> <a name="app_engine_integration_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.appEngineIntegrationMode"></a>

```python
app_engine_integration_mode: str
```

- *Type:* str

---

##### `concurrency_mode`<sup>Required</sup> <a name="concurrency_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.concurrencyMode"></a>

```python
concurrency_mode: str
```

- *Type:* str

---

##### `delete_protection_state`<sup>Required</sup> <a name="delete_protection_state" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deleteProtectionState"></a>

```python
delete_protection_state: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_id`<sup>Required</sup> <a name="location_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.locationId"></a>

```python
location_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `point_in_time_recovery_enablement`<sup>Required</sup> <a name="point_in_time_recovery_enablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.pointInTimeRecoveryEnablement"></a>

```python
point_in_time_recovery_enablement: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreDatabaseCmekConfig <a name="GoogleFirestoreDatabaseCmekConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource ID of a Cloud KMS key. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource ID of a Cloud KMS key.

If set, the database created will
be a Customer-managed Encryption Key (CMEK) database encrypted with
this key. This feature is allowlist only in initial launch.

Only keys in the same location as this database are allowed to be used
for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
multi-region us. For Firestore's eur3 multi-region, this corresponds to
Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.

This value should be the KMS key resource ID in the format of
'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
How to retrieve this resource ID is listed at
https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#kms_key_name GoogleFirestoreDatabase#kms_key_name}

---

### GoogleFirestoreDatabaseConfig <a name="GoogleFirestoreDatabaseConfig" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location_id: str,
  name: str,
  type: str,
  app_engine_integration_mode: str = None,
  cmek_config: GoogleFirestoreDatabaseCmekConfig = None,
  concurrency_mode: str = None,
  delete_protection_state: str = None,
  deletion_policy: str = None,
  id: str = None,
  point_in_time_recovery_enablement: str = None,
  project: str = None,
  timeouts: GoogleFirestoreDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId">location_id</a></code> | <code>str</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name">name</a></code> | <code>str</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type">type</a></code> | <code>str</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode">app_engine_integration_mode</a></code> | <code>str</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.cmekConfig">cmek_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | cmek_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deleteProtectionState">delete_protection_state</a></code> | <code>str</code> | State of delete protection for the database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Deletion behavior for this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement">point_in_time_recovery_enablement</a></code> | <code>str</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location_id`<sup>Required</sup> <a name="location_id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.locationId"></a>

```python
location_id: str
```

- *Type:* str

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#location_id GoogleFirestoreDatabase#location_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#name GoogleFirestoreDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#type GoogleFirestoreDatabase#type}

---

##### `app_engine_integration_mode`<sup>Optional</sup> <a name="app_engine_integration_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```python
app_engine_integration_mode: str
```

- *Type:* str

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#app_engine_integration_mode GoogleFirestoreDatabase#app_engine_integration_mode}

---

##### `cmek_config`<sup>Optional</sup> <a name="cmek_config" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.cmekConfig"></a>

```python
cmek_config: GoogleFirestoreDatabaseCmekConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

cmek_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#cmek_config GoogleFirestoreDatabase#cmek_config}

---

##### `concurrency_mode`<sup>Optional</sup> <a name="concurrency_mode" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.concurrencyMode"></a>

```python
concurrency_mode: str
```

- *Type:* str

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#concurrency_mode GoogleFirestoreDatabase#concurrency_mode}

---

##### `delete_protection_state`<sup>Optional</sup> <a name="delete_protection_state" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deleteProtectionState"></a>

```python
delete_protection_state: str
```

- *Type:* str

State of delete protection for the database.

When delete protection is enabled, this database cannot be deleted.
The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#delete_protection_state GoogleFirestoreDatabase#delete_protection_state}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Deletion behavior for this database.

If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
The default value is 'ABANDON'.
See also 'delete_protection'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#deletion_policy GoogleFirestoreDatabase#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `point_in_time_recovery_enablement`<sup>Optional</sup> <a name="point_in_time_recovery_enablement" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement"></a>

```python
point_in_time_recovery_enablement: str
```

- *Type:* str

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#point_in_time_recovery_enablement GoogleFirestoreDatabase#point_in_time_recovery_enablement}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseConfig.property.timeouts"></a>

```python
timeouts: GoogleFirestoreDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#timeouts GoogleFirestoreDatabase#timeouts}

---

### GoogleFirestoreDatabaseTimeouts <a name="GoogleFirestoreDatabaseTimeouts" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreDatabaseCmekConfigOutputReference <a name="GoogleFirestoreDatabaseCmekConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion">active_key_version</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.activeKeyVersion"></a>

```python
active_key_version: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirestoreDatabaseCmekConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseCmekConfig">GoogleFirestoreDatabaseCmekConfig</a>

---


### GoogleFirestoreDatabaseTimeoutsOutputReference <a name="GoogleFirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firestore_database

googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirestoreDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirestoreDatabase.GoogleFirestoreDatabaseTimeouts">GoogleFirestoreDatabaseTimeouts</a>]

---



