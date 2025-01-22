# `googleSpannerDatabase` Submodule <a name="`googleSpannerDatabase` Submodule" id="@cdktf/provider-google-beta.googleSpannerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerDatabase <a name="GoogleSpannerDatabase" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database google_spanner_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  name: str,
  database_dialect: str = None,
  ddl: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_drop_protection: typing.Union[bool, IResolvable] = None,
  encryption_config: GoogleSpannerDatabaseEncryptionConfig = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleSpannerDatabaseTimeouts = None,
  version_retention_period: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.databaseDialect">database_dialect</a></code> | <code>str</code> | The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.ddl">ddl</a></code> | <code>typing.List[str]</code> | An optional list of DDL statements to run inside the newly created database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.enableDropProtection">enable_drop_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether drop protection is enabled for this database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#id GoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#project GoogleSpannerDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.versionRetentionPeriod">version_retention_period</a></code> | <code>str</code> | The retention period for the database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#instance GoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#name GoogleSpannerDatabase#name}

---

##### `database_dialect`<sup>Optional</sup> <a name="database_dialect" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.databaseDialect"></a>

- *Type:* str

The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#database_dialect GoogleSpannerDatabase#database_dialect}

---

##### `ddl`<sup>Optional</sup> <a name="ddl" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.ddl"></a>

- *Type:* typing.List[str]

An optional list of DDL statements to run inside the newly created database.

Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#ddl GoogleSpannerDatabase#ddl}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the database.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the database,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the database will fail.
When the field is set to false, deleting the database is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#deletion_protection GoogleSpannerDatabase#deletion_protection}

---

##### `enable_drop_protection`<sup>Optional</sup> <a name="enable_drop_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.enableDropProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether drop protection is enabled for this database.

Defaults to false.
Drop protection is different from
the "deletion_protection" attribute in the following ways:
(1) "deletion_protection" only protects the database from deletions in Terraform.
whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
(2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
"deletion_protection" attribute does not provide protection against the deletion of the parent instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#enable_drop_protection GoogleSpannerDatabase#enable_drop_protection}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#encryption_config GoogleSpannerDatabase#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#id GoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#project GoogleSpannerDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#timeouts GoogleSpannerDatabase#timeouts}

---

##### `version_retention_period`<sup>Optional</sup> <a name="version_retention_period" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.Initializer.parameter.versionRetentionPeriod"></a>

- *Type:* str

The retention period for the database.

The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to 'ddl' that
update the database's version_retention_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#version_retention_period GoogleSpannerDatabase#version_retention_period}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDatabaseDialect">reset_database_dialect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDdl">reset_ddl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetEnableDropProtection">reset_enable_drop_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetVersionRetentionPeriod">reset_version_retention_period</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None,
  kms_key_names: typing.List[str] = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

Fully qualified name of the KMS key to use to encrypt this database.

This key must exist
in the same location as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#kms_key_name GoogleSpannerDatabase#kms_key_name}

---

###### `kms_key_names`<sup>Optional</sup> <a name="kms_key_names" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putEncryptionConfig.parameter.kmsKeyNames"></a>

- *Type:* typing.List[str]

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#kms_key_names GoogleSpannerDatabase#kms_key_names}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#create GoogleSpannerDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#delete GoogleSpannerDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#update GoogleSpannerDatabase#update}.

---

##### `reset_database_dialect` <a name="reset_database_dialect" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDatabaseDialect"></a>

```python
def reset_database_dialect() -> None
```

##### `reset_ddl` <a name="reset_ddl" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDdl"></a>

```python
def reset_ddl() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_enable_drop_protection` <a name="reset_enable_drop_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetEnableDropProtection"></a>

```python
def reset_enable_drop_protection() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_retention_period` <a name="reset_version_retention_period" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.resetVersionRetentionPeriod"></a>

```python
def reset_version_retention_period() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSpannerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSpannerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSpannerDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSpannerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference">GoogleSpannerDatabaseEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference">GoogleSpannerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.databaseDialectInput">database_dialect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.ddlInput">ddl_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.enableDropProtectionInput">enable_drop_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.versionRetentionPeriodInput">version_retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.databaseDialect">database_dialect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.ddl">ddl</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.enableDropProtection">enable_drop_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.versionRetentionPeriod">version_retention_period</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.encryptionConfig"></a>

```python
encryption_config: GoogleSpannerDatabaseEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference">GoogleSpannerDatabaseEncryptionConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.timeouts"></a>

```python
timeouts: GoogleSpannerDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference">GoogleSpannerDatabaseTimeoutsOutputReference</a>

---

##### `database_dialect_input`<sup>Optional</sup> <a name="database_dialect_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.databaseDialectInput"></a>

```python
database_dialect_input: str
```

- *Type:* str

---

##### `ddl_input`<sup>Optional</sup> <a name="ddl_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.ddlInput"></a>

```python
ddl_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_drop_protection_input`<sup>Optional</sup> <a name="enable_drop_protection_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.enableDropProtectionInput"></a>

```python
enable_drop_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleSpannerDatabaseEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSpannerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>]

---

##### `version_retention_period_input`<sup>Optional</sup> <a name="version_retention_period_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.versionRetentionPeriodInput"></a>

```python
version_retention_period_input: str
```

- *Type:* str

---

##### `database_dialect`<sup>Required</sup> <a name="database_dialect" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.databaseDialect"></a>

```python
database_dialect: str
```

- *Type:* str

---

##### `ddl`<sup>Required</sup> <a name="ddl" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.ddl"></a>

```python
ddl: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_drop_protection`<sup>Required</sup> <a name="enable_drop_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.enableDropProtection"></a>

```python
enable_drop_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version_retention_period`<sup>Required</sup> <a name="version_retention_period" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.versionRetentionPeriod"></a>

```python
version_retention_period: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerDatabaseConfig <a name="GoogleSpannerDatabaseConfig" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  name: str,
  database_dialect: str = None,
  ddl: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_drop_protection: typing.Union[bool, IResolvable] = None,
  encryption_config: GoogleSpannerDatabaseEncryptionConfig = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleSpannerDatabaseTimeouts = None,
  version_retention_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.databaseDialect">database_dialect</a></code> | <code>str</code> | The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.ddl">ddl</a></code> | <code>typing.List[str]</code> | An optional list of DDL statements to run inside the newly created database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.enableDropProtection">enable_drop_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether drop protection is enabled for this database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#id GoogleSpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#project GoogleSpannerDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.versionRetentionPeriod">version_retention_period</a></code> | <code>str</code> | The retention period for the database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#instance GoogleSpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#name GoogleSpannerDatabase#name}

---

##### `database_dialect`<sup>Optional</sup> <a name="database_dialect" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.databaseDialect"></a>

```python
database_dialect: str
```

- *Type:* str

The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#database_dialect GoogleSpannerDatabase#database_dialect}

---

##### `ddl`<sup>Optional</sup> <a name="ddl" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.ddl"></a>

```python
ddl: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of DDL statements to run inside the newly created database.

Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#ddl GoogleSpannerDatabase#ddl}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the database.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the database,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the database will fail.
When the field is set to false, deleting the database is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#deletion_protection GoogleSpannerDatabase#deletion_protection}

---

##### `enable_drop_protection`<sup>Optional</sup> <a name="enable_drop_protection" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.enableDropProtection"></a>

```python
enable_drop_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether drop protection is enabled for this database.

Defaults to false.
Drop protection is different from
the "deletion_protection" attribute in the following ways:
(1) "deletion_protection" only protects the database from deletions in Terraform.
whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
(2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
"deletion_protection" attribute does not provide protection against the deletion of the parent instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#enable_drop_protection GoogleSpannerDatabase#enable_drop_protection}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleSpannerDatabaseEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#encryption_config GoogleSpannerDatabase#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#id GoogleSpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#project GoogleSpannerDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.timeouts"></a>

```python
timeouts: GoogleSpannerDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#timeouts GoogleSpannerDatabase#timeouts}

---

##### `version_retention_period`<sup>Optional</sup> <a name="version_retention_period" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseConfig.property.versionRetentionPeriod"></a>

```python
version_retention_period: str
```

- *Type:* str

The retention period for the database.

The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to 'ddl' that
update the database's version_retention_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#version_retention_period GoogleSpannerDatabase#version_retention_period}

---

### GoogleSpannerDatabaseEncryptionConfig <a name="GoogleSpannerDatabaseEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig(
  kms_key_name: str = None,
  kms_key_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Fully qualified name of the KMS key to use to encrypt this database. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig.property.kmsKeyNames">kms_key_names</a></code> | <code>typing.List[str]</code> | Fully qualified name of the KMS keys to use to encrypt this database. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Fully qualified name of the KMS key to use to encrypt this database.

This key must exist
in the same location as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#kms_key_name GoogleSpannerDatabase#kms_key_name}

---

##### `kms_key_names`<sup>Optional</sup> <a name="kms_key_names" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig.property.kmsKeyNames"></a>

```python
kms_key_names: typing.List[str]
```

- *Type:* typing.List[str]

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#kms_key_names GoogleSpannerDatabase#kms_key_names}

---

### GoogleSpannerDatabaseTimeouts <a name="GoogleSpannerDatabaseTimeouts" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#create GoogleSpannerDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#delete GoogleSpannerDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#update GoogleSpannerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#create GoogleSpannerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#delete GoogleSpannerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_spanner_database#update GoogleSpannerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerDatabaseEncryptionConfigOutputReference <a name="GoogleSpannerDatabaseEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyNames">reset_kms_key_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_kms_key_names` <a name="reset_kms_key_names" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyNames"></a>

```python
def reset_kms_key_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNamesInput">kms_key_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames">kms_key_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_names_input`<sup>Optional</sup> <a name="kms_key_names_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNamesInput"></a>

```python
kms_key_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `kms_key_names`<sup>Required</sup> <a name="kms_key_names" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```python
kms_key_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSpannerDatabaseEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseEncryptionConfig">GoogleSpannerDatabaseEncryptionConfig</a>

---


### GoogleSpannerDatabaseTimeoutsOutputReference <a name="GoogleSpannerDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_spanner_database

googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSpannerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSpannerDatabase.GoogleSpannerDatabaseTimeouts">GoogleSpannerDatabaseTimeouts</a>]

---



