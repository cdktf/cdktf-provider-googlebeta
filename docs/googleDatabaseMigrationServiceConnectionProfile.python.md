# `google_database_migration_service_connection_profile`

Refer to the Terraform Registory for docs: [`google_database_migration_service_connection_profile`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile).

# `googleDatabaseMigrationServiceConnectionProfile` Submodule <a name="`googleDatabaseMigrationServiceConnectionProfile` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServiceConnectionProfile <a name="GoogleDatabaseMigrationServiceConnectionProfile" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile google_database_migration_service_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  alloydb: GoogleDatabaseMigrationServiceConnectionProfileAlloydb = None,
  cloudsql: GoogleDatabaseMigrationServiceConnectionProfileCloudsql = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  mysql: GoogleDatabaseMigrationServiceConnectionProfileMysql = None,
  postgresql: GoogleDatabaseMigrationServiceConnectionProfilePostgresql = None,
  project: str = None,
  timeouts: GoogleDatabaseMigrationServiceConnectionProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The ID of the connection profile. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a></code> | alloydb block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a></code> | cloudsql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The connection profile display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the connection profile should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#project GoogleDatabaseMigrationServiceConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* str

The ID of the connection profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#connection_profile_id GoogleDatabaseMigrationServiceConnectionProfile#connection_profile_id}

---

##### `alloydb`<sup>Optional</sup> <a name="alloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.alloydb"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a>

alloydb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#alloydb GoogleDatabaseMigrationServiceConnectionProfile#alloydb}

---

##### `cloudsql`<sup>Optional</sup> <a name="cloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.cloudsql"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a>

cloudsql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloudsql GoogleDatabaseMigrationServiceConnectionProfile#cloudsql}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* str

The connection profile display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#display_name GoogleDatabaseMigrationServiceConnectionProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.location"></a>

- *Type:* str

The location where the connection profile should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#location GoogleDatabaseMigrationServiceConnectionProfile#location}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#mysql GoogleDatabaseMigrationServiceConnectionProfile#mysql}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#postgresql GoogleDatabaseMigrationServiceConnectionProfile#postgresql}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#project GoogleDatabaseMigrationServiceConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#timeouts GoogleDatabaseMigrationServiceConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putAlloydb">put_alloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putCloudsql">put_cloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql">put_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql">put_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetAlloydb">reset_alloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetCloudsql">reset_cloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetMysql">reset_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetPostgresql">reset_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alloydb` <a name="put_alloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putAlloydb"></a>

```python
def put_alloydb(
  cluster_id: str,
  settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings = None
) -> None
```

###### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putAlloydb.parameter.clusterId"></a>

- *Type:* str

Required. The AlloyDB cluster ID that this connection profile is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cluster_id GoogleDatabaseMigrationServiceConnectionProfile#cluster_id}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putAlloydb.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#settings GoogleDatabaseMigrationServiceConnectionProfile#settings}

---

##### `put_cloudsql` <a name="put_cloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putCloudsql"></a>

```python
def put_cloudsql(
  settings: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings = None
) -> None
```

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putCloudsql.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#settings GoogleDatabaseMigrationServiceConnectionProfile#settings}

---

##### `put_mysql` <a name="put_mysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql"></a>

```python
def put_mysql(
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str,
  cloud_sql_id: str = None,
  ssl: GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.host"></a>

- *Type:* str

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#host GoogleDatabaseMigrationServiceConnectionProfile#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.password"></a>

- *Type:* str

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.port"></a>

- *Type:* typing.Union[int, float]

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#port GoogleDatabaseMigrationServiceConnectionProfile#port}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.username"></a>

- *Type:* str

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#username GoogleDatabaseMigrationServiceConnectionProfile#username}

---

###### `cloud_sql_id`<sup>Optional</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.cloudSqlId"></a>

- *Type:* str

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloud_sql_id GoogleDatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putMysql.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ssl GoogleDatabaseMigrationServiceConnectionProfile#ssl}

---

##### `put_postgresql` <a name="put_postgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql"></a>

```python
def put_postgresql(
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str,
  cloud_sql_id: str = None,
  ssl: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.host"></a>

- *Type:* str

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#host GoogleDatabaseMigrationServiceConnectionProfile#host}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.password"></a>

- *Type:* str

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.port"></a>

- *Type:* typing.Union[int, float]

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#port GoogleDatabaseMigrationServiceConnectionProfile#port}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.username"></a>

- *Type:* str

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#username GoogleDatabaseMigrationServiceConnectionProfile#username}

---

###### `cloud_sql_id`<sup>Optional</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.cloudSqlId"></a>

- *Type:* str

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloud_sql_id GoogleDatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putPostgresql.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ssl GoogleDatabaseMigrationServiceConnectionProfile#ssl}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#create GoogleDatabaseMigrationServiceConnectionProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#delete GoogleDatabaseMigrationServiceConnectionProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#update GoogleDatabaseMigrationServiceConnectionProfile#update}.

---

##### `reset_alloydb` <a name="reset_alloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetAlloydb"></a>

```python
def reset_alloydb() -> None
```

##### `reset_cloudsql` <a name="reset_cloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetCloudsql"></a>

```python
def reset_cloudsql() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_mysql` <a name="reset_mysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetMysql"></a>

```python
def reset_mysql() -> None
```

##### `reset_postgresql` <a name="reset_postgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetPostgresql"></a>

```python
def reset_postgresql() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.dbprovider">dbprovider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList">GoogleDatabaseMigrationServiceConnectionProfileErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.alloydbInput">alloydb_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cloudsqlInput">cloudsql_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput">connection_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.mysqlInput">mysql_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.postgresqlInput">postgresql_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alloydb`<sup>Required</sup> <a name="alloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.alloydb"></a>

```python
alloydb: GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference</a>

---

##### `cloudsql`<sup>Required</sup> <a name="cloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cloudsql"></a>

```python
cloudsql: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dbprovider`<sup>Required</sup> <a name="dbprovider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.dbprovider"></a>

```python
dbprovider: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.error"></a>

```python
error: GoogleDatabaseMigrationServiceConnectionProfileErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList">GoogleDatabaseMigrationServiceConnectionProfileErrorList</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.mysql"></a>

```python
mysql: GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.postgresql"></a>

```python
postgresql: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.timeouts"></a>

```python
timeouts: GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference</a>

---

##### `alloydb_input`<sup>Optional</sup> <a name="alloydb_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.alloydbInput"></a>

```python
alloydb_input: GoogleDatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a>

---

##### `cloudsql_input`<sup>Optional</sup> <a name="cloudsql_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.cloudsqlInput"></a>

```python
cloudsql_input: GoogleDatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a>

---

##### `connection_profile_id_input`<sup>Optional</sup> <a name="connection_profile_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connectionProfileIdInput"></a>

```python
connection_profile_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mysql_input`<sup>Optional</sup> <a name="mysql_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.mysqlInput"></a>

```python
mysql_input: GoogleDatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a>

---

##### `postgresql_input`<sup>Optional</sup> <a name="postgresql_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.postgresqlInput"></a>

```python
postgresql_input: GoogleDatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleDatabaseMigrationServiceConnectionProfileTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>, cdktf.IResolvable]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServiceConnectionProfileAlloydb <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb(
  cluster_id: str,
  settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId">cluster_id</a></code> | <code>str</code> | Required. The AlloyDB cluster ID that this connection profile is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | settings block. |

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Required. The AlloyDB cluster ID that this connection profile is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cluster_id GoogleDatabaseMigrationServiceConnectionProfile#cluster_id}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb.property.settings"></a>

```python
settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#settings GoogleDatabaseMigrationServiceConnectionProfile#settings}

---

### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings(
  initial_user: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser,
  vpc_network: str,
  labels: typing.Mapping[str] = None,
  primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork">vpc_network</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the AlloyDB cluster created by DMS. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings">primary_instance_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | primary_instance_settings block. |

---

##### `initial_user`<sup>Required</sup> <a name="initial_user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.initialUser"></a>

```python
initial_user: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#initial_user GoogleDatabaseMigrationServiceConnectionProfile#initial_user}

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.vpcNetwork"></a>

```python
vpc_network: str
```

- *Type:* str

Required.

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#vpc_network GoogleDatabaseMigrationServiceConnectionProfile#vpc_network}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for the AlloyDB cluster created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

##### `primary_instance_settings`<sup>Optional</sup> <a name="primary_instance_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings.property.primaryInstanceSettings"></a>

```python
primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

primary_instance_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#primary_instance_settings GoogleDatabaseMigrationServiceConnectionProfile#primary_instance_settings}

---

### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser(
  password: str,
  user: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password">password</a></code> | <code>str</code> | The initial password for the user. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user">user</a></code> | <code>str</code> | The database username. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.password"></a>

```python
password: str
```

- *Type:* str

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser.property.user"></a>

```python
user: str
```

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#user GoogleDatabaseMigrationServiceConnectionProfile#user}

---

### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings(
  id: str,
  machine_config: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig,
  database_flags: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id">id</a></code> | <code>str</code> | The database username. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for the AlloyDB primary instance created by DMS. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.id"></a>

```python
id: str
```

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.machineConfig"></a>

```python
machine_config: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#machine_config GoogleDatabaseMigrationServiceConnectionProfile#machine_config}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances.

See the AlloyDB documentation for how these can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_flags GoogleDatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for the AlloyDB primary instance created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig(
  cpu_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU's in the VM instance. |

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cpu_count GoogleDatabaseMigrationServiceConnectionProfile#cpu_count}

---

### GoogleDatabaseMigrationServiceConnectionProfileCloudsql <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql(
  settings: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | settings block. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql.property.settings"></a>

```python
settings: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#settings GoogleDatabaseMigrationServiceConnectionProfile#settings}

---

### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings(
  source_id: str,
  activation_policy: str = None,
  auto_storage_increase: typing.Union[bool, IResolvable] = None,
  cmek_key_name: str = None,
  collation: str = None,
  database_flags: typing.Mapping[str] = None,
  database_version: str = None,
  data_disk_size_gb: str = None,
  data_disk_type: str = None,
  ip_config: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig = None,
  root_password: str = None,
  storage_auto_resize_limit: str = None,
  tier: str = None,
  user_labels: typing.Mapping[str] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId">source_id</a></code> | <code>str</code> | The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy">activation_policy</a></code> | <code>str</code> | The activation policy specifies when the instance is activated; |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease">auto_storage_increase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If you enable this setting, Cloud SQL checks your available storage every 30 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName">cmek_key_name</a></code> | <code>str</code> | The KMS key name used for the csql instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation">collation</a></code> | <code>str</code> | The Cloud SQL default instance level collation. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | The database flags passed to the Cloud SQL instance at startup. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion">database_version</a></code> | <code>str</code> | The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>str</code> | The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | The type of storage. Possible values: ["PD_SSD", "PD_HDD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig">ip_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword">root_password</a></code> | <code>str</code> | Input only. Initial root password. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit">storage_auto_resize_limit</a></code> | <code>str</code> | The maximum size to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier">tier</a></code> | <code>str</code> | The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone">zone</a></code> | <code>str</code> | The Google Cloud Platform zone where your Cloud SQL datdabse instance is located. |

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#source_id GoogleDatabaseMigrationServiceConnectionProfile#source_id}

---

##### `activation_policy`<sup>Optional</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

The activation policy specifies when the instance is activated;

it is applicable only when the instance state is 'RUNNABLE'. Possible values: ["ALWAYS", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#activation_policy GoogleDatabaseMigrationServiceConnectionProfile#activation_policy}

---

##### `auto_storage_increase`<sup>Optional</sup> <a name="auto_storage_increase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.autoStorageIncrease"></a>

```python
auto_storage_increase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If you enable this setting, Cloud SQL checks your available storage every 30 seconds.

If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#auto_storage_increase GoogleDatabaseMigrationServiceConnectionProfile#auto_storage_increase}

---

##### `cmek_key_name`<sup>Optional</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.cmekKeyName"></a>

```python
cmek_key_name: str
```

- *Type:* str

The KMS key name used for the csql instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cmek_key_name GoogleDatabaseMigrationServiceConnectionProfile#cmek_key_name}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.collation"></a>

```python
collation: str
```

- *Type:* str

The Cloud SQL default instance level collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#collation GoogleDatabaseMigrationServiceConnectionProfile#collation}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The database flags passed to the Cloud SQL instance at startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_flags GoogleDatabaseMigrationServiceConnectionProfile#database_flags}

---

##### `database_version`<sup>Optional</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_version GoogleDatabaseMigrationServiceConnectionProfile#database_version}

---

##### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: str
```

- *Type:* str

The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#data_disk_size_gb GoogleDatabaseMigrationServiceConnectionProfile#data_disk_size_gb}

---

##### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

The type of storage. Possible values: ["PD_SSD", "PD_HDD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#data_disk_type GoogleDatabaseMigrationServiceConnectionProfile#data_disk_type}

---

##### `ip_config`<sup>Optional</sup> <a name="ip_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.ipConfig"></a>

```python
ip_config: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ip_config GoogleDatabaseMigrationServiceConnectionProfile#ip_config}

---

##### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

Input only. Initial root password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#root_password GoogleDatabaseMigrationServiceConnectionProfile#root_password}

---

##### `storage_auto_resize_limit`<sup>Optional</sup> <a name="storage_auto_resize_limit" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.storageAutoResizeLimit"></a>

```python
storage_auto_resize_limit: str
```

- *Type:* str

The maximum size to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#storage_auto_resize_limit GoogleDatabaseMigrationServiceConnectionProfile#storage_auto_resize_limit}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.tier"></a>

```python
tier: str
```

- *Type:* str

The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).

For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#tier GoogleDatabaseMigrationServiceConnectionProfile#tier}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#user_labels GoogleDatabaseMigrationServiceConnectionProfile#user_labels}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings.property.zone"></a>

```python
zone: str
```

- *Type:* str

The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#zone GoogleDatabaseMigrationServiceConnectionProfile#zone}

---

### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig(
  authorized_networks: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]] = None,
  enable_ipv4: typing.Union[bool, IResolvable] = None,
  private_network: str = None,
  require_ssl: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks">authorized_networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4">enable_ipv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the instance should be assigned an IPv4 address or not. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork">private_network</a></code> | <code>str</code> | The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl">require_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether SSL connections over IP should be enforced or not. |

---

##### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.authorizedNetworks"></a>

```python
authorized_networks: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#authorized_networks GoogleDatabaseMigrationServiceConnectionProfile#authorized_networks}

---

##### `enable_ipv4`<sup>Optional</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.enableIpv4"></a>

```python
enable_ipv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance should be assigned an IPv4 address or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#enable_ipv4 GoogleDatabaseMigrationServiceConnectionProfile#enable_ipv4}

---

##### `private_network`<sup>Optional</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.privateNetwork"></a>

```python
private_network: str
```

- *Type:* str

The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#private_network GoogleDatabaseMigrationServiceConnectionProfile#private_network}

---

##### `require_ssl`<sup>Optional</sup> <a name="require_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig.property.requireSsl"></a>

```python
require_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether SSL connections over IP should be enforced or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#require_ssl GoogleDatabaseMigrationServiceConnectionProfile#require_ssl}

---

### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks(
  value: str,
  expire_time: str = None,
  label: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value">value</a></code> | <code>str</code> | The allowlisted value for the access control list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime">expire_time</a></code> | <code>str</code> | The time when this access control entry expires in RFC 3339 format. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label">label</a></code> | <code>str</code> | A label to identify this entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl">ttl</a></code> | <code>str</code> | Input only. The time-to-leave of this access control entry. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.value"></a>

```python
value: str
```

- *Type:* str

The allowlisted value for the access control list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#value GoogleDatabaseMigrationServiceConnectionProfile#value}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

The time when this access control entry expires in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#expire_time GoogleDatabaseMigrationServiceConnectionProfile#expire_time}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.label"></a>

```python
label: str
```

- *Type:* str

A label to identify this entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#label GoogleDatabaseMigrationServiceConnectionProfile#label}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Input only. The time-to-leave of this access control entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ttl GoogleDatabaseMigrationServiceConnectionProfile#ttl}

---

### GoogleDatabaseMigrationServiceConnectionProfileConfig <a name="GoogleDatabaseMigrationServiceConnectionProfileConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  alloydb: GoogleDatabaseMigrationServiceConnectionProfileAlloydb = None,
  cloudsql: GoogleDatabaseMigrationServiceConnectionProfileCloudsql = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  mysql: GoogleDatabaseMigrationServiceConnectionProfileMysql = None,
  postgresql: GoogleDatabaseMigrationServiceConnectionProfilePostgresql = None,
  project: str = None,
  timeouts: GoogleDatabaseMigrationServiceConnectionProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The ID of the connection profile. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.alloydb">alloydb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a></code> | alloydb block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.cloudsql">cloudsql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a></code> | cloudsql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | The connection profile display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.location">location</a></code> | <code>str</code> | The location where the connection profile should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#project GoogleDatabaseMigrationServiceConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

The ID of the connection profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#connection_profile_id GoogleDatabaseMigrationServiceConnectionProfile#connection_profile_id}

---

##### `alloydb`<sup>Optional</sup> <a name="alloydb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.alloydb"></a>

```python
alloydb: GoogleDatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a>

alloydb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#alloydb GoogleDatabaseMigrationServiceConnectionProfile#alloydb}

---

##### `cloudsql`<sup>Optional</sup> <a name="cloudsql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.cloudsql"></a>

```python
cloudsql: GoogleDatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a>

cloudsql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloudsql GoogleDatabaseMigrationServiceConnectionProfile#cloudsql}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The connection profile display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#display_name GoogleDatabaseMigrationServiceConnectionProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the connection profile should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#location GoogleDatabaseMigrationServiceConnectionProfile#location}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.mysql"></a>

```python
mysql: GoogleDatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#mysql GoogleDatabaseMigrationServiceConnectionProfile#mysql}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.postgresql"></a>

```python
postgresql: GoogleDatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#postgresql GoogleDatabaseMigrationServiceConnectionProfile#postgresql}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#project GoogleDatabaseMigrationServiceConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleDatabaseMigrationServiceConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#timeouts GoogleDatabaseMigrationServiceConnectionProfile#timeouts}

---

### GoogleDatabaseMigrationServiceConnectionProfileError <a name="GoogleDatabaseMigrationServiceConnectionProfileError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileError.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileError()
```


### GoogleDatabaseMigrationServiceConnectionProfileMysql <a name="GoogleDatabaseMigrationServiceConnectionProfileMysql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql(
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str,
  cloud_sql_id: str = None,
  ssl: GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.host">host</a></code> | <code>str</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.password">password</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.username">username</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId">cloud_sql_id</a></code> | <code>str</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | ssl block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.host"></a>

```python
host: str
```

- *Type:* str

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#host GoogleDatabaseMigrationServiceConnectionProfile#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.password"></a>

```python
password: str
```

- *Type:* str

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#port GoogleDatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.username"></a>

```python
username: str
```

- *Type:* str

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#username GoogleDatabaseMigrationServiceConnectionProfile#username}

---

##### `cloud_sql_id`<sup>Optional</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.cloudSqlId"></a>

```python
cloud_sql_id: str
```

- *Type:* str

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloud_sql_id GoogleDatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql.property.ssl"></a>

```python
ssl: GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ssl GoogleDatabaseMigrationServiceConnectionProfile#ssl}

---

### GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl <a name="GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl(
  ca_certificate: str,
  client_certificate: str = None,
  client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate">ca_certificate</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate">client_certificate</a></code> | <code>str</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey">client_key</a></code> | <code>str</code> | Input only. |

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ca_certificate GoogleDatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_certificate GoogleDatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_key GoogleDatabaseMigrationServiceConnectionProfile#client_key}

---

### GoogleDatabaseMigrationServiceConnectionProfilePostgresql <a name="GoogleDatabaseMigrationServiceConnectionProfilePostgresql" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql(
  host: str,
  password: str,
  port: typing.Union[int, float],
  username: str,
  cloud_sql_id: str = None,
  ssl: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.host">host</a></code> | <code>str</code> | Required. The IP or hostname of the source MySQL database. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.password">password</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Required. The network port of the source MySQL database. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.username">username</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId">cloud_sql_id</a></code> | <code>str</code> | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | ssl block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.host"></a>

```python
host: str
```

- *Type:* str

Required. The IP or hostname of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#host GoogleDatabaseMigrationServiceConnectionProfile#host}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.password"></a>

```python
password: str
```

- *Type:* str

Required.

Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Required. The network port of the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#port GoogleDatabaseMigrationServiceConnectionProfile#port}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.username"></a>

```python
username: str
```

- *Type:* str

Required.

The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#username GoogleDatabaseMigrationServiceConnectionProfile#username}

---

##### `cloud_sql_id`<sup>Optional</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.cloudSqlId"></a>

```python
cloud_sql_id: str
```

- *Type:* str

If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cloud_sql_id GoogleDatabaseMigrationServiceConnectionProfile#cloud_sql_id}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql.property.ssl"></a>

```python
ssl: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ssl GoogleDatabaseMigrationServiceConnectionProfile#ssl}

---

### GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl <a name="GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl(
  ca_certificate: str,
  client_certificate: str = None,
  client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate">ca_certificate</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate">client_certificate</a></code> | <code>str</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey">client_key</a></code> | <code>str</code> | Input only. |

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ca_certificate GoogleDatabaseMigrationServiceConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_certificate GoogleDatabaseMigrationServiceConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_key GoogleDatabaseMigrationServiceConnectionProfile#client_key}

---

### GoogleDatabaseMigrationServiceConnectionProfileTimeouts <a name="GoogleDatabaseMigrationServiceConnectionProfileTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#create GoogleDatabaseMigrationServiceConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#delete GoogleDatabaseMigrationServiceConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#update GoogleDatabaseMigrationServiceConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#create GoogleDatabaseMigrationServiceConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#delete GoogleDatabaseMigrationServiceConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#update GoogleDatabaseMigrationServiceConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings"></a>

```python
def put_settings(
  initial_user: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser,
  vpc_network: str,
  labels: typing.Mapping[str] = None,
  primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings = None
) -> None
```

###### `initial_user`<sup>Required</sup> <a name="initial_user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.initialUser"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#initial_user GoogleDatabaseMigrationServiceConnectionProfile#initial_user}

---

###### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.vpcNetwork"></a>

- *Type:* str

Required.

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#vpc_network GoogleDatabaseMigrationServiceConnectionProfile#vpc_network}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for the AlloyDB cluster created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

###### `primary_instance_settings`<sup>Optional</sup> <a name="primary_instance_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.putSettings.parameter.primaryInstanceSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

primary_instance_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#primary_instance_settings GoogleDatabaseMigrationServiceConnectionProfile#primary_instance_settings}

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settings"></a>

```python
settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.settingsInput"></a>

```python
settings_input: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileAlloydb
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydb">GoogleDatabaseMigrationServiceConnectionProfileAlloydb</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet">password_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_set`<sup>Required</sup> <a name="password_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordSet"></a>

```python
password_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser">put_initial_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings">put_primary_instance_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings">reset_primary_instance_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initial_user` <a name="put_initial_user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser"></a>

```python
def put_initial_user(
  password: str,
  user: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser.parameter.password"></a>

- *Type:* str

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#password GoogleDatabaseMigrationServiceConnectionProfile#password}

---

###### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putInitialUser.parameter.user"></a>

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#user GoogleDatabaseMigrationServiceConnectionProfile#user}

---

##### `put_primary_instance_settings` <a name="put_primary_instance_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings"></a>

```python
def put_primary_instance_settings(
  id: str,
  machine_config: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig,
  database_flags: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.id"></a>

- *Type:* str

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#id GoogleDatabaseMigrationServiceConnectionProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.machineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#machine_config GoogleDatabaseMigrationServiceConnectionProfile#machine_config}

---

###### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.databaseFlags"></a>

- *Type:* typing.Mapping[str]

Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances.

See the AlloyDB documentation for how these can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_flags GoogleDatabaseMigrationServiceConnectionProfile#database_flags}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.putPrimaryInstanceSettings.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for the AlloyDB primary instance created by DMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#labels GoogleDatabaseMigrationServiceConnectionProfile#labels}

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_primary_instance_settings` <a name="reset_primary_instance_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.resetPrimaryInstanceSettings"></a>

```python
def reset_primary_instance_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser">initial_user</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings">primary_instance_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput">initial_user_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput">primary_instance_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput">vpc_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork">vpc_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial_user`<sup>Required</sup> <a name="initial_user" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUser"></a>

```python
initial_user: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference</a>

---

##### `primary_instance_settings`<sup>Required</sup> <a name="primary_instance_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettings"></a>

```python
primary_instance_settings: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference</a>

---

##### `initial_user_input`<sup>Optional</sup> <a name="initial_user_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.initialUserInput"></a>

```python
initial_user_input: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `primary_instance_settings_input`<sup>Optional</sup> <a name="primary_instance_settings_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.primaryInstanceSettingsInput"></a>

```python
primary_instance_settings_input: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---

##### `vpc_network_input`<sup>Optional</sup> <a name="vpc_network_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetworkInput"></a>

```python
vpc_network_input: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.vpcNetwork"></a>

```python
vpc_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettings</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput">cpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count_input`<sup>Optional</sup> <a name="cpu_count_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCountInput"></a>

```python
cpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig">put_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags">reset_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_machine_config` <a name="put_machine_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig"></a>

```python
def put_machine_config(
  cpu_count: typing.Union[int, float]
) -> None
```

###### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.putMachineConfig.parameter.cpuCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cpu_count GoogleDatabaseMigrationServiceConnectionProfile#cpu_count}

---

##### `reset_database_flags` <a name="reset_database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```python
def reset_database_flags() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput">database_flags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput">machine_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfig"></a>

```python
machine_config: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference</a>

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `database_flags_input`<sup>Optional</sup> <a name="database_flags_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```python
database_flags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_config_input`<sup>Optional</sup> <a name="machine_config_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.machineConfigInput"></a>

```python
machine_config_input: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig</a>

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings">GoogleDatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings"></a>

```python
def put_settings(
  source_id: str,
  activation_policy: str = None,
  auto_storage_increase: typing.Union[bool, IResolvable] = None,
  cmek_key_name: str = None,
  collation: str = None,
  database_flags: typing.Mapping[str] = None,
  database_version: str = None,
  data_disk_size_gb: str = None,
  data_disk_type: str = None,
  ip_config: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig = None,
  root_password: str = None,
  storage_auto_resize_limit: str = None,
  tier: str = None,
  user_labels: typing.Mapping[str] = None,
  zone: str = None
) -> None
```

###### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.sourceId"></a>

- *Type:* str

The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#source_id GoogleDatabaseMigrationServiceConnectionProfile#source_id}

---

###### `activation_policy`<sup>Optional</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.activationPolicy"></a>

- *Type:* str

The activation policy specifies when the instance is activated;

it is applicable only when the instance state is 'RUNNABLE'. Possible values: ["ALWAYS", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#activation_policy GoogleDatabaseMigrationServiceConnectionProfile#activation_policy}

---

###### `auto_storage_increase`<sup>Optional</sup> <a name="auto_storage_increase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.autoStorageIncrease"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If you enable this setting, Cloud SQL checks your available storage every 30 seconds.

If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#auto_storage_increase GoogleDatabaseMigrationServiceConnectionProfile#auto_storage_increase}

---

###### `cmek_key_name`<sup>Optional</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.cmekKeyName"></a>

- *Type:* str

The KMS key name used for the csql instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#cmek_key_name GoogleDatabaseMigrationServiceConnectionProfile#cmek_key_name}

---

###### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.collation"></a>

- *Type:* str

The Cloud SQL default instance level collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#collation GoogleDatabaseMigrationServiceConnectionProfile#collation}

---

###### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.databaseFlags"></a>

- *Type:* typing.Mapping[str]

The database flags passed to the Cloud SQL instance at startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_flags GoogleDatabaseMigrationServiceConnectionProfile#database_flags}

---

###### `database_version`<sup>Optional</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.databaseVersion"></a>

- *Type:* str

The database engine type and version. Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#database_version GoogleDatabaseMigrationServiceConnectionProfile#database_version}

---

###### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.dataDiskSizeGb"></a>

- *Type:* str

The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#data_disk_size_gb GoogleDatabaseMigrationServiceConnectionProfile#data_disk_size_gb}

---

###### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.dataDiskType"></a>

- *Type:* str

The type of storage. Possible values: ["PD_SSD", "PD_HDD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#data_disk_type GoogleDatabaseMigrationServiceConnectionProfile#data_disk_type}

---

###### `ip_config`<sup>Optional</sup> <a name="ip_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.ipConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ip_config GoogleDatabaseMigrationServiceConnectionProfile#ip_config}

---

###### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.rootPassword"></a>

- *Type:* str

Input only. Initial root password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#root_password GoogleDatabaseMigrationServiceConnectionProfile#root_password}

---

###### `storage_auto_resize_limit`<sup>Optional</sup> <a name="storage_auto_resize_limit" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.storageAutoResizeLimit"></a>

- *Type:* str

The maximum size to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#storage_auto_resize_limit GoogleDatabaseMigrationServiceConnectionProfile#storage_auto_resize_limit}

---

###### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.tier"></a>

- *Type:* str

The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).

For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#tier GoogleDatabaseMigrationServiceConnectionProfile#tier}

---

###### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#user_labels GoogleDatabaseMigrationServiceConnectionProfile#user_labels}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.putSettings.parameter.zone"></a>

- *Type:* str

The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#zone GoogleDatabaseMigrationServiceConnectionProfile#zone}

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId">cloud_sql_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_id`<sup>Required</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.cloudSqlId"></a>

```python
cloud_sql_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settings"></a>

```python
settings: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference</a>

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.settingsInput"></a>

```python
settings_input: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileCloudsql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsql">GoogleDatabaseMigrationServiceConnectionProfileCloudsql</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]

---


### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>, cdktf.IResolvable]

---


### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks">put_authorized_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks">reset_authorized_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4">reset_enable_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork">reset_private_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl">reset_require_ssl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorized_networks` <a name="put_authorized_networks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks"></a>

```python
def put_authorized_networks(
  value: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]

---

##### `reset_authorized_networks` <a name="reset_authorized_networks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetAuthorizedNetworks"></a>

```python
def reset_authorized_networks() -> None
```

##### `reset_enable_ipv4` <a name="reset_enable_ipv4" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetEnableIpv4"></a>

```python
def reset_enable_ipv4() -> None
```

##### `reset_private_network` <a name="reset_private_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetPrivateNetwork"></a>

```python
def reset_private_network() -> None
```

##### `reset_require_ssl` <a name="reset_require_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.resetRequireSsl"></a>

```python
def reset_require_ssl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks">authorized_networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput">authorized_networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input">enable_ipv4_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput">private_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput">require_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4">enable_ipv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork">private_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl">require_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_networks`<sup>Required</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworks"></a>

```python
authorized_networks: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList</a>

---

##### `authorized_networks_input`<sup>Optional</sup> <a name="authorized_networks_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.authorizedNetworksInput"></a>

```python
authorized_networks_input: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]

---

##### `enable_ipv4_input`<sup>Optional</sup> <a name="enable_ipv4_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4Input"></a>

```python
enable_ipv4_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_network_input`<sup>Optional</sup> <a name="private_network_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetworkInput"></a>

```python
private_network_input: str
```

- *Type:* str

---

##### `require_ssl_input`<sup>Optional</sup> <a name="require_ssl_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSslInput"></a>

```python
require_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ipv4`<sup>Required</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.enableIpv4"></a>

```python
enable_ipv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_network`<sup>Required</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.privateNetwork"></a>

```python
private_network: str
```

- *Type:* str

---

##### `require_ssl`<sup>Required</sup> <a name="require_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.requireSsl"></a>

```python
require_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig">put_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy">reset_activation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease">reset_auto_storage_increase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName">reset_cmek_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation">reset_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags">reset_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion">reset_database_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb">reset_data_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType">reset_data_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig">reset_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword">reset_root_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit">reset_storage_auto_resize_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels">reset_user_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_config` <a name="put_ip_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig"></a>

```python
def put_ip_config(
  authorized_networks: typing.Union[IResolvable, typing.List[GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks]] = None,
  enable_ipv4: typing.Union[bool, IResolvable] = None,
  private_network: str = None,
  require_ssl: typing.Union[bool, IResolvable] = None
) -> None
```

###### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.authorizedNetworks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks</a>]]

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#authorized_networks GoogleDatabaseMigrationServiceConnectionProfile#authorized_networks}

---

###### `enable_ipv4`<sup>Optional</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.enableIpv4"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance should be assigned an IPv4 address or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#enable_ipv4 GoogleDatabaseMigrationServiceConnectionProfile#enable_ipv4}

---

###### `private_network`<sup>Optional</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.privateNetwork"></a>

- *Type:* str

The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#private_network GoogleDatabaseMigrationServiceConnectionProfile#private_network}

---

###### `require_ssl`<sup>Optional</sup> <a name="require_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.putIpConfig.parameter.requireSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether SSL connections over IP should be enforced or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#require_ssl GoogleDatabaseMigrationServiceConnectionProfile#require_ssl}

---

##### `reset_activation_policy` <a name="reset_activation_policy" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetActivationPolicy"></a>

```python
def reset_activation_policy() -> None
```

##### `reset_auto_storage_increase` <a name="reset_auto_storage_increase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetAutoStorageIncrease"></a>

```python
def reset_auto_storage_increase() -> None
```

##### `reset_cmek_key_name` <a name="reset_cmek_key_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCmekKeyName"></a>

```python
def reset_cmek_key_name() -> None
```

##### `reset_collation` <a name="reset_collation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetCollation"></a>

```python
def reset_collation() -> None
```

##### `reset_database_flags` <a name="reset_database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseFlags"></a>

```python
def reset_database_flags() -> None
```

##### `reset_database_version` <a name="reset_database_version" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDatabaseVersion"></a>

```python
def reset_database_version() -> None
```

##### `reset_data_disk_size_gb` <a name="reset_data_disk_size_gb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskSizeGb"></a>

```python
def reset_data_disk_size_gb() -> None
```

##### `reset_data_disk_type` <a name="reset_data_disk_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetDataDiskType"></a>

```python
def reset_data_disk_type() -> None
```

##### `reset_ip_config` <a name="reset_ip_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetIpConfig"></a>

```python
def reset_ip_config() -> None
```

##### `reset_root_password` <a name="reset_root_password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetRootPassword"></a>

```python
def reset_root_password() -> None
```

##### `reset_storage_auto_resize_limit` <a name="reset_storage_auto_resize_limit" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetStorageAutoResizeLimit"></a>

```python
def reset_storage_auto_resize_limit() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig">ip_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet">root_password_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput">activation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput">auto_storage_increase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput">cmek_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput">collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput">database_flags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput">database_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput">data_disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput">data_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput">ip_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput">root_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput">storage_auto_resize_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy">activation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease">auto_storage_increase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName">cmek_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword">root_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit">storage_auto_resize_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_config`<sup>Required</sup> <a name="ip_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfig"></a>

```python
ip_config: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference</a>

---

##### `root_password_set`<sup>Required</sup> <a name="root_password_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordSet"></a>

```python
root_password_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `activation_policy_input`<sup>Optional</sup> <a name="activation_policy_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicyInput"></a>

```python
activation_policy_input: str
```

- *Type:* str

---

##### `auto_storage_increase_input`<sup>Optional</sup> <a name="auto_storage_increase_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncreaseInput"></a>

```python
auto_storage_increase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cmek_key_name_input`<sup>Optional</sup> <a name="cmek_key_name_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyNameInput"></a>

```python
cmek_key_name_input: str
```

- *Type:* str

---

##### `collation_input`<sup>Optional</sup> <a name="collation_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collationInput"></a>

```python
collation_input: str
```

- *Type:* str

---

##### `database_flags_input`<sup>Optional</sup> <a name="database_flags_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlagsInput"></a>

```python
database_flags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_version_input`<sup>Optional</sup> <a name="database_version_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersionInput"></a>

```python
database_version_input: str
```

- *Type:* str

---

##### `data_disk_size_gb_input`<sup>Optional</sup> <a name="data_disk_size_gb_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGbInput"></a>

```python
data_disk_size_gb_input: str
```

- *Type:* str

---

##### `data_disk_type_input`<sup>Optional</sup> <a name="data_disk_type_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskTypeInput"></a>

```python
data_disk_type_input: str
```

- *Type:* str

---

##### `ip_config_input`<sup>Optional</sup> <a name="ip_config_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.ipConfigInput"></a>

```python
ip_config_input: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig</a>

---

##### `root_password_input`<sup>Optional</sup> <a name="root_password_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPasswordInput"></a>

```python
root_password_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `storage_auto_resize_limit_input`<sup>Optional</sup> <a name="storage_auto_resize_limit_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimitInput"></a>

```python
storage_auto_resize_limit_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `activation_policy`<sup>Required</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

---

##### `auto_storage_increase`<sup>Required</sup> <a name="auto_storage_increase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.autoStorageIncrease"></a>

```python
auto_storage_increase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cmek_key_name`<sup>Required</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.cmekKeyName"></a>

```python
cmek_key_name: str
```

- *Type:* str

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `data_disk_size_gb`<sup>Required</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: str
```

- *Type:* str

---

##### `data_disk_type`<sup>Required</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

---

##### `root_password`<sup>Required</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `storage_auto_resize_limit`<sup>Required</sup> <a name="storage_auto_resize_limit" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.storageAutoResizeLimit"></a>

```python
storage_auto_resize_limit: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings">GoogleDatabaseMigrationServiceConnectionProfileCloudsqlSettings</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileErrorList <a name="GoogleDatabaseMigrationServiceConnectionProfileErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileError">GoogleDatabaseMigrationServiceConnectionProfileError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileError">GoogleDatabaseMigrationServiceConnectionProfileError</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl">put_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId">reset_cloud_sql_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl` <a name="put_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl"></a>

```python
def put_ssl(
  ca_certificate: str,
  client_certificate: str = None,
  client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl.parameter.caCertificate"></a>

- *Type:* str

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ca_certificate GoogleDatabaseMigrationServiceConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl.parameter.clientCertificate"></a>

- *Type:* str

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_certificate GoogleDatabaseMigrationServiceConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.putSsl.parameter.clientKey"></a>

- *Type:* str

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_key GoogleDatabaseMigrationServiceConnectionProfile#client_key}

---

##### `reset_cloud_sql_id` <a name="reset_cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetCloudSqlId"></a>

```python
def reset_cloud_sql_id() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet">password_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput">cloud_sql_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput">ssl_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId">cloud_sql_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_set`<sup>Required</sup> <a name="password_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordSet"></a>

```python
password_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.ssl"></a>

```python
ssl: GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference">GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference</a>

---

##### `cloud_sql_id_input`<sup>Optional</sup> <a name="cloud_sql_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlIdInput"></a>

```python
cloud_sql_id_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.sslInput"></a>

```python
ssl_input: GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `cloud_sql_id`<sup>Required</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.cloudSqlId"></a>

```python
cloud_sql_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileMysql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysql">GoogleDatabaseMigrationServiceConnectionProfileMysql</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSslOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl">GoogleDatabaseMigrationServiceConnectionProfileMysqlSsl</a>

---


### GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl">put_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId">reset_cloud_sql_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl` <a name="put_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl"></a>

```python
def put_ssl(
  ca_certificate: str,
  client_certificate: str = None,
  client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl.parameter.caCertificate"></a>

- *Type:* str

Required.

Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
The replica will use this certificate to verify it's connecting to the right host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#ca_certificate GoogleDatabaseMigrationServiceConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl.parameter.clientCertificate"></a>

- *Type:* str

Input only.

The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
If this field is used then the 'clientKey' field is mandatory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_certificate GoogleDatabaseMigrationServiceConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.putSsl.parameter.clientKey"></a>

- *Type:* str

Input only.

The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
If this field is used then the 'clientCertificate' field is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_database_migration_service_connection_profile#client_key GoogleDatabaseMigrationServiceConnectionProfile#client_key}

---

##### `reset_cloud_sql_id` <a name="reset_cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetCloudSqlId"></a>

```python
def reset_cloud_sql_id() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture">network_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet">password_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput">cloud_sql_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput">ssl_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId">cloud_sql_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_architecture`<sup>Required</sup> <a name="network_architecture" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.networkArchitecture"></a>

```python
network_architecture: str
```

- *Type:* str

---

##### `password_set`<sup>Required</sup> <a name="password_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordSet"></a>

```python
password_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.ssl"></a>

```python
ssl: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference</a>

---

##### `cloud_sql_id_input`<sup>Optional</sup> <a name="cloud_sql_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlIdInput"></a>

```python
cloud_sql_id_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.sslInput"></a>

```python
ssl_input: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `cloud_sql_id`<sup>Required</sup> <a name="cloud_sql_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.cloudSqlId"></a>

```python
cloud_sql_id: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfilePostgresql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresql">GoogleDatabaseMigrationServiceConnectionProfilePostgresql</a>

---


### GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl">GoogleDatabaseMigrationServiceConnectionProfilePostgresqlSsl</a>

---


### GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference <a name="GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_connection_profile

googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleDatabaseMigrationServiceConnectionProfileTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceConnectionProfile.GoogleDatabaseMigrationServiceConnectionProfileTimeouts">GoogleDatabaseMigrationServiceConnectionProfileTimeouts</a>, cdktf.IResolvable]

---



