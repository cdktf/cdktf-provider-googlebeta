# `googleSqlDatabaseInstance` Submodule <a name="`googleSqlDatabaseInstance` Submodule" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSqlDatabaseInstance <a name="GoogleSqlDatabaseInstance" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_version: str,
  clone: GoogleSqlDatabaseInstanceClone = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  encryption_key_name: str = None,
  id: str = None,
  instance_type: str = None,
  maintenance_version: str = None,
  master_instance_name: str = None,
  name: str = None,
  project: str = None,
  region: str = None,
  replica_configuration: GoogleSqlDatabaseInstanceReplicaConfiguration = None,
  replica_names: typing.List[str] = None,
  replication_cluster: GoogleSqlDatabaseInstanceReplicationCluster = None,
  restore_backup_context: GoogleSqlDatabaseInstanceRestoreBackupContext = None,
  root_password: str = None,
  settings: GoogleSqlDatabaseInstanceSettings = None,
  timeouts: GoogleSqlDatabaseInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.databaseVersion">database_version</a></code> | <code>str</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.clone">clone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.encryptionKeyName">encryption_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#encryption_key_name GoogleSqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#id GoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.maintenanceVersion">maintenance_version</a></code> | <code>str</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.masterInstanceName">master_instance_name</a></code> | <code>str</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicaNames">replica_names</a></code> | <code>typing.List[str]</code> | The replicas of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicationCluster">replication_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a></code> | replication_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.restoreBackupContext">restore_backup_context</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.rootPassword">root_password</a></code> | <code>str</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.databaseVersion"></a>

- *Type:* str

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_version GoogleSqlDatabaseInstance#database_version}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.clone"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#clone GoogleSqlDatabaseInstance#clone}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deletion_protection GoogleSqlDatabaseInstance#deletion_protection}

---

##### `encryption_key_name`<sup>Optional</sup> <a name="encryption_key_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.encryptionKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#encryption_key_name GoogleSqlDatabaseInstance#encryption_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#id GoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#instance_type GoogleSqlDatabaseInstance#instance_type}

---

##### `maintenance_version`<sup>Optional</sup> <a name="maintenance_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.maintenanceVersion"></a>

- *Type:* str

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#maintenance_version GoogleSqlDatabaseInstance#maintenance_version}

---

##### `master_instance_name`<sup>Optional</sup> <a name="master_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.masterInstanceName"></a>

- *Type:* str

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#master_instance_name GoogleSqlDatabaseInstance#master_instance_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.region"></a>

- *Type:* str

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#region GoogleSqlDatabaseInstance#region}

---

##### `replica_configuration`<sup>Optional</sup> <a name="replica_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicaConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replica_configuration GoogleSqlDatabaseInstance#replica_configuration}

---

##### `replica_names`<sup>Optional</sup> <a name="replica_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicaNames"></a>

- *Type:* typing.List[str]

The replicas of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replica_names GoogleSqlDatabaseInstance#replica_names}

---

##### `replication_cluster`<sup>Optional</sup> <a name="replication_cluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.replicationCluster"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a>

replication_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replication_cluster GoogleSqlDatabaseInstance#replication_cluster}

---

##### `restore_backup_context`<sup>Optional</sup> <a name="restore_backup_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.restoreBackupContext"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#restore_backup_context GoogleSqlDatabaseInstance#restore_backup_context}

---

##### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.rootPassword"></a>

- *Type:* str

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#root_password GoogleSqlDatabaseInstance#root_password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#settings GoogleSqlDatabaseInstance#settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#timeouts GoogleSqlDatabaseInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone">put_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration">put_replica_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicationCluster">put_replication_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putRestoreBackupContext">put_restore_backup_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetClone">reset_clone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetEncryptionKeyName">reset_encryption_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetMaintenanceVersion">reset_maintenance_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetMasterInstanceName">reset_master_instance_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicaConfiguration">reset_replica_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicaNames">reset_replica_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicationCluster">reset_replication_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRestoreBackupContext">reset_restore_backup_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRootPassword">reset_root_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_clone` <a name="put_clone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone"></a>

```python
def put_clone(
  source_instance_name: str,
  allocated_ip_range: str = None,
  database_names: typing.List[str] = None,
  point_in_time: str = None,
  preferred_zone: str = None
) -> None
```

###### `source_instance_name`<sup>Required</sup> <a name="source_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone.parameter.sourceInstanceName"></a>

- *Type:* str

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#source_instance_name GoogleSqlDatabaseInstance#source_instance_name}

---

###### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone.parameter.allocatedIpRange"></a>

- *Type:* str

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}

---

###### `database_names`<sup>Optional</sup> <a name="database_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone.parameter.databaseNames"></a>

- *Type:* typing.List[str]

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_names GoogleSqlDatabaseInstance#database_names}

---

###### `point_in_time`<sup>Optional</sup> <a name="point_in_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone.parameter.pointInTime"></a>

- *Type:* str

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#point_in_time GoogleSqlDatabaseInstance#point_in_time}

---

###### `preferred_zone`<sup>Optional</sup> <a name="preferred_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putClone.parameter.preferredZone"></a>

- *Type:* str

(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone.

If no zone is specified, clone to the same zone as the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#preferred_zone GoogleSqlDatabaseInstance#preferred_zone}

---

##### `put_replica_configuration` <a name="put_replica_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration"></a>

```python
def put_replica_configuration(
  ca_certificate: str = None,
  cascadable_replica: typing.Union[bool, IResolvable] = None,
  client_certificate: str = None,
  client_key: str = None,
  connect_retry_interval: typing.Union[int, float] = None,
  dump_file_path: str = None,
  failover_target: typing.Union[bool, IResolvable] = None,
  master_heartbeat_period: typing.Union[int, float] = None,
  password: str = None,
  ssl_cipher: str = None,
  username: str = None,
  verify_server_certificate: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.caCertificate"></a>

- *Type:* str

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ca_certificate GoogleSqlDatabaseInstance#ca_certificate}

---

###### `cascadable_replica`<sup>Optional</sup> <a name="cascadable_replica" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.cascadableReplica"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if a SQL Server replica is a cascadable replica.

A cascadable replica is a SQL Server cross region replica that supports replica(s) under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#cascadable_replica GoogleSqlDatabaseInstance#cascadable_replica}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.clientCertificate"></a>

- *Type:* str

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#client_certificate GoogleSqlDatabaseInstance#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.clientKey"></a>

- *Type:* str

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#client_key GoogleSqlDatabaseInstance#client_key}

---

###### `connect_retry_interval`<sup>Optional</sup> <a name="connect_retry_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.connectRetryInterval"></a>

- *Type:* typing.Union[int, float]

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#connect_retry_interval GoogleSqlDatabaseInstance#connect_retry_interval}

---

###### `dump_file_path`<sup>Optional</sup> <a name="dump_file_path" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.dumpFilePath"></a>

- *Type:* str

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#dump_file_path GoogleSqlDatabaseInstance#dump_file_path}

---

###### `failover_target`<sup>Optional</sup> <a name="failover_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.failoverTarget"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#failover_target GoogleSqlDatabaseInstance#failover_target}

---

###### `master_heartbeat_period`<sup>Optional</sup> <a name="master_heartbeat_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.masterHeartbeatPeriod"></a>

- *Type:* typing.Union[int, float]

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#master_heartbeat_period GoogleSqlDatabaseInstance#master_heartbeat_period}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.password"></a>

- *Type:* str

Password for the replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password GoogleSqlDatabaseInstance#password}

---

###### `ssl_cipher`<sup>Optional</sup> <a name="ssl_cipher" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.sslCipher"></a>

- *Type:* str

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ssl_cipher GoogleSqlDatabaseInstance#ssl_cipher}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.username"></a>

- *Type:* str

Username for replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#username GoogleSqlDatabaseInstance#username}

---

###### `verify_server_certificate`<sup>Optional</sup> <a name="verify_server_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicaConfiguration.parameter.verifyServerCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#verify_server_certificate GoogleSqlDatabaseInstance#verify_server_certificate}

---

##### `put_replication_cluster` <a name="put_replication_cluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicationCluster"></a>

```python
def put_replication_cluster(
  failover_dr_replica_name: str = None
) -> None
```

###### `failover_dr_replica_name`<sup>Optional</sup> <a name="failover_dr_replica_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putReplicationCluster.parameter.failoverDrReplicaName"></a>

- *Type:* str

If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica.

The standard format of this field is "your-project:your-instance". You can also set this field to "your-instance", but cloud SQL backend will convert it to the aforementioned standard format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#failover_dr_replica_name GoogleSqlDatabaseInstance#failover_dr_replica_name}

---

##### `put_restore_backup_context` <a name="put_restore_backup_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putRestoreBackupContext"></a>

```python
def put_restore_backup_context(
  backup_run_id: typing.Union[int, float],
  instance_id: str = None,
  project: str = None
) -> None
```

###### `backup_run_id`<sup>Required</sup> <a name="backup_run_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putRestoreBackupContext.parameter.backupRunId"></a>

- *Type:* typing.Union[int, float]

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_run_id GoogleSqlDatabaseInstance#backup_run_id}

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putRestoreBackupContext.parameter.instanceId"></a>

- *Type:* str

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#instance_id GoogleSqlDatabaseInstance#instance_id}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putRestoreBackupContext.parameter.project"></a>

- *Type:* str

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings"></a>

```python
def put_settings(
  tier: str,
  activation_policy: str = None,
  active_directory_config: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig = None,
  advanced_machine_features: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures = None,
  availability_type: str = None,
  backup_configuration: GoogleSqlDatabaseInstanceSettingsBackupConfiguration = None,
  collation: str = None,
  connector_enforcement: str = None,
  database_flags: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]] = None,
  data_cache_config: GoogleSqlDatabaseInstanceSettingsDataCacheConfig = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  deny_maintenance_period: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod = None,
  disk_autoresize: typing.Union[bool, IResolvable] = None,
  disk_autoresize_limit: typing.Union[int, float] = None,
  disk_size: typing.Union[int, float] = None,
  disk_type: str = None,
  edition: str = None,
  enable_dataplex_integration: typing.Union[bool, IResolvable] = None,
  enable_google_ml_integration: typing.Union[bool, IResolvable] = None,
  insights_config: GoogleSqlDatabaseInstanceSettingsInsightsConfig = None,
  ip_configuration: GoogleSqlDatabaseInstanceSettingsIpConfiguration = None,
  location_preference: GoogleSqlDatabaseInstanceSettingsLocationPreference = None,
  maintenance_window: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow = None,
  password_validation_policy: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy = None,
  pricing_plan: str = None,
  sql_server_audit_config: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig = None,
  time_zone: str = None,
  user_labels: typing.Mapping[str] = None
) -> None
```

###### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.tier"></a>

- *Type:* str

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#tier GoogleSqlDatabaseInstance#tier}

---

###### `activation_policy`<sup>Optional</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.activationPolicy"></a>

- *Type:* str

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#activation_policy GoogleSqlDatabaseInstance#activation_policy}

---

###### `active_directory_config`<sup>Optional</sup> <a name="active_directory_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.activeDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#active_directory_config GoogleSqlDatabaseInstance#active_directory_config}

---

###### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#advanced_machine_features GoogleSqlDatabaseInstance#advanced_machine_features}

---

###### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.availabilityType"></a>

- *Type:* str

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#availability_type GoogleSqlDatabaseInstance#availability_type}

---

###### `backup_configuration`<sup>Optional</sup> <a name="backup_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.backupConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_configuration GoogleSqlDatabaseInstance#backup_configuration}

---

###### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.collation"></a>

- *Type:* str

The name of server instance collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#collation GoogleSqlDatabaseInstance#collation}

---

###### `connector_enforcement`<sup>Optional</sup> <a name="connector_enforcement" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.connectorEnforcement"></a>

- *Type:* str

Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections.

If enabled, all the direct connections are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#connector_enforcement GoogleSqlDatabaseInstance#connector_enforcement}

---

###### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.databaseFlags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]

database_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_flags GoogleSqlDatabaseInstance#database_flags}

---

###### `data_cache_config`<sup>Optional</sup> <a name="data_cache_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.dataCacheConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#data_cache_config GoogleSqlDatabaseInstance#data_cache_config}

---

###### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.deletionProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deletion_protection_enabled GoogleSqlDatabaseInstance#deletion_protection_enabled}

---

###### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.denyMaintenancePeriod"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deny_maintenance_period GoogleSqlDatabaseInstance#deny_maintenance_period}

---

###### `disk_autoresize`<sup>Optional</sup> <a name="disk_autoresize" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.diskAutoresize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_autoresize GoogleSqlDatabaseInstance#disk_autoresize}

---

###### `disk_autoresize_limit`<sup>Optional</sup> <a name="disk_autoresize_limit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.diskAutoresizeLimit"></a>

- *Type:* typing.Union[int, float]

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_autoresize_limit GoogleSqlDatabaseInstance#disk_autoresize_limit}

---

###### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.diskSize"></a>

- *Type:* typing.Union[int, float]

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_size GoogleSqlDatabaseInstance#disk_size}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.diskType"></a>

- *Type:* str

The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_type GoogleSqlDatabaseInstance#disk_type}

---

###### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.edition"></a>

- *Type:* str

The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#edition GoogleSqlDatabaseInstance#edition}

---

###### `enable_dataplex_integration`<sup>Optional</sup> <a name="enable_dataplex_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.enableDataplexIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Dataplex Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_dataplex_integration GoogleSqlDatabaseInstance#enable_dataplex_integration}

---

###### `enable_google_ml_integration`<sup>Optional</sup> <a name="enable_google_ml_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.enableGoogleMlIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Vertex AI Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_google_ml_integration GoogleSqlDatabaseInstance#enable_google_ml_integration}

---

###### `insights_config`<sup>Optional</sup> <a name="insights_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.insightsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#insights_config GoogleSqlDatabaseInstance#insights_config}

---

###### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.ipConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ip_configuration GoogleSqlDatabaseInstance#ip_configuration}

---

###### `location_preference`<sup>Optional</sup> <a name="location_preference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.locationPreference"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#location_preference GoogleSqlDatabaseInstance#location_preference}

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#maintenance_window GoogleSqlDatabaseInstance#maintenance_window}

---

###### `password_validation_policy`<sup>Optional</sup> <a name="password_validation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.passwordValidationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password_validation_policy GoogleSqlDatabaseInstance#password_validation_policy}

---

###### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.pricingPlan"></a>

- *Type:* str

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#pricing_plan GoogleSqlDatabaseInstance#pricing_plan}

---

###### `sql_server_audit_config`<sup>Optional</sup> <a name="sql_server_audit_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.sqlServerAuditConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#sql_server_audit_config GoogleSqlDatabaseInstance#sql_server_audit_config}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.timeZone"></a>

- *Type:* str

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#time_zone GoogleSqlDatabaseInstance#time_zone}

---

###### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putSettings.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#user_labels GoogleSqlDatabaseInstance#user_labels}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#create GoogleSqlDatabaseInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#delete GoogleSqlDatabaseInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#update GoogleSqlDatabaseInstance#update}.

---

##### `reset_clone` <a name="reset_clone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetClone"></a>

```python
def reset_clone() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_encryption_key_name` <a name="reset_encryption_key_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetEncryptionKeyName"></a>

```python
def reset_encryption_key_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_maintenance_version` <a name="reset_maintenance_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetMaintenanceVersion"></a>

```python
def reset_maintenance_version() -> None
```

##### `reset_master_instance_name` <a name="reset_master_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetMasterInstanceName"></a>

```python
def reset_master_instance_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replica_configuration` <a name="reset_replica_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicaConfiguration"></a>

```python
def reset_replica_configuration() -> None
```

##### `reset_replica_names` <a name="reset_replica_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicaNames"></a>

```python
def reset_replica_names() -> None
```

##### `reset_replication_cluster` <a name="reset_replication_cluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetReplicationCluster"></a>

```python
def reset_replication_cluster() -> None
```

##### `reset_restore_backup_context` <a name="reset_restore_backup_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRestoreBackupContext"></a>

```python
def reset_restore_backup_context() -> None
```

##### `reset_root_password` <a name="reset_root_password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetRootPassword"></a>

```python
def reset_root_password() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSqlDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSqlDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSqlDatabaseInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSqlDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSqlDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.availableMaintenanceVersions">available_maintenance_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference">GoogleSqlDatabaseInstanceCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.firstIpAddress">first_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.ipAddress">ip_address</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList">GoogleSqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.pscServiceAttachmentLink">psc_service_attachment_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference">GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicationCluster">replication_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference">GoogleSqlDatabaseInstanceReplicationClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.restoreBackupContext">restore_backup_context</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference">GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.serverCaCert">server_ca_cert</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList">GoogleSqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.serviceAccountEmailAddress">service_account_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference">GoogleSqlDatabaseInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference">GoogleSqlDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.cloneInput">clone_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.databaseVersionInput">database_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.encryptionKeyNameInput">encryption_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.maintenanceVersionInput">maintenance_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.masterInstanceNameInput">master_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaConfigurationInput">replica_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaNamesInput">replica_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicationClusterInput">replication_cluster_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.restoreBackupContextInput">restore_backup_context_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.rootPasswordInput">root_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.encryptionKeyName">encryption_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.maintenanceVersion">maintenance_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.masterInstanceName">master_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaNames">replica_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.rootPassword">root_password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_maintenance_versions`<sup>Required</sup> <a name="available_maintenance_versions" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```python
available_maintenance_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.clone"></a>

```python
clone: GoogleSqlDatabaseInstanceCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference">GoogleSqlDatabaseInstanceCloneOutputReference</a>

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `first_ip_address`<sup>Required</sup> <a name="first_ip_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.firstIpAddress"></a>

```python
first_ip_address: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.ipAddress"></a>

```python
ip_address: GoogleSqlDatabaseInstanceIpAddressList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList">GoogleSqlDatabaseInstanceIpAddressList</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `psc_service_attachment_link`<sup>Required</sup> <a name="psc_service_attachment_link" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```python
psc_service_attachment_link: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaConfiguration"></a>

```python
replica_configuration: GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference">GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference</a>

---

##### `replication_cluster`<sup>Required</sup> <a name="replication_cluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicationCluster"></a>

```python
replication_cluster: GoogleSqlDatabaseInstanceReplicationClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference">GoogleSqlDatabaseInstanceReplicationClusterOutputReference</a>

---

##### `restore_backup_context`<sup>Required</sup> <a name="restore_backup_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.restoreBackupContext"></a>

```python
restore_backup_context: GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference">GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_ca_cert`<sup>Required</sup> <a name="server_ca_cert" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.serverCaCert"></a>

```python
server_ca_cert: GoogleSqlDatabaseInstanceServerCaCertList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList">GoogleSqlDatabaseInstanceServerCaCertList</a>

---

##### `service_account_email_address`<sup>Required</sup> <a name="service_account_email_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```python
service_account_email_address: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.settings"></a>

```python
settings: GoogleSqlDatabaseInstanceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference">GoogleSqlDatabaseInstanceSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.timeouts"></a>

```python
timeouts: GoogleSqlDatabaseInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference">GoogleSqlDatabaseInstanceTimeoutsOutputReference</a>

---

##### `clone_input`<sup>Optional</sup> <a name="clone_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.cloneInput"></a>

```python
clone_input: GoogleSqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a>

---

##### `database_version_input`<sup>Optional</sup> <a name="database_version_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.databaseVersionInput"></a>

```python
database_version_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_key_name_input`<sup>Optional</sup> <a name="encryption_key_name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.encryptionKeyNameInput"></a>

```python
encryption_key_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `maintenance_version_input`<sup>Optional</sup> <a name="maintenance_version_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.maintenanceVersionInput"></a>

```python
maintenance_version_input: str
```

- *Type:* str

---

##### `master_instance_name_input`<sup>Optional</sup> <a name="master_instance_name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.masterInstanceNameInput"></a>

```python
master_instance_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replica_configuration_input`<sup>Optional</sup> <a name="replica_configuration_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaConfigurationInput"></a>

```python
replica_configuration_input: GoogleSqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a>

---

##### `replica_names_input`<sup>Optional</sup> <a name="replica_names_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaNamesInput"></a>

```python
replica_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_cluster_input`<sup>Optional</sup> <a name="replication_cluster_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicationClusterInput"></a>

```python
replication_cluster_input: GoogleSqlDatabaseInstanceReplicationCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a>

---

##### `restore_backup_context_input`<sup>Optional</sup> <a name="restore_backup_context_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.restoreBackupContextInput"></a>

```python
restore_backup_context_input: GoogleSqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a>

---

##### `root_password_input`<sup>Optional</sup> <a name="root_password_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.rootPasswordInput"></a>

```python
root_password_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.settingsInput"></a>

```python
settings_input: GoogleSqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSqlDatabaseInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_key_name`<sup>Required</sup> <a name="encryption_key_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.encryptionKeyName"></a>

```python
encryption_key_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `maintenance_version`<sup>Required</sup> <a name="maintenance_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.maintenanceVersion"></a>

```python
maintenance_version: str
```

- *Type:* str

---

##### `master_instance_name`<sup>Required</sup> <a name="master_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.masterInstanceName"></a>

```python
master_instance_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_names`<sup>Required</sup> <a name="replica_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.replicaNames"></a>

```python
replica_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `root_password`<sup>Required</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSqlDatabaseInstanceClone <a name="GoogleSqlDatabaseInstanceClone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone(
  source_instance_name: str,
  allocated_ip_range: str = None,
  database_names: typing.List[str] = None,
  point_in_time: str = None,
  preferred_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.sourceInstanceName">source_instance_name</a></code> | <code>str</code> | The name of the instance from which the point in time should be restored. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.databaseNames">database_names</a></code> | <code>typing.List[str]</code> | (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.pointInTime">point_in_time</a></code> | <code>str</code> | The timestamp of the point in time that should be restored. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.preferredZone">preferred_zone</a></code> | <code>str</code> | (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. |

---

##### `source_instance_name`<sup>Required</sup> <a name="source_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.sourceInstanceName"></a>

```python
source_instance_name: str
```

- *Type:* str

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#source_instance_name GoogleSqlDatabaseInstance#source_instance_name}

---

##### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}

---

##### `database_names`<sup>Optional</sup> <a name="database_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.databaseNames"></a>

```python
database_names: typing.List[str]
```

- *Type:* typing.List[str]

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_names GoogleSqlDatabaseInstance#database_names}

---

##### `point_in_time`<sup>Optional</sup> <a name="point_in_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#point_in_time GoogleSqlDatabaseInstance#point_in_time}

---

##### `preferred_zone`<sup>Optional</sup> <a name="preferred_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone.property.preferredZone"></a>

```python
preferred_zone: str
```

- *Type:* str

(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone.

If no zone is specified, clone to the same zone as the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#preferred_zone GoogleSqlDatabaseInstance#preferred_zone}

---

### GoogleSqlDatabaseInstanceConfig <a name="GoogleSqlDatabaseInstanceConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_version: str,
  clone: GoogleSqlDatabaseInstanceClone = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  encryption_key_name: str = None,
  id: str = None,
  instance_type: str = None,
  maintenance_version: str = None,
  master_instance_name: str = None,
  name: str = None,
  project: str = None,
  region: str = None,
  replica_configuration: GoogleSqlDatabaseInstanceReplicaConfiguration = None,
  replica_names: typing.List[str] = None,
  replication_cluster: GoogleSqlDatabaseInstanceReplicationCluster = None,
  restore_backup_context: GoogleSqlDatabaseInstanceRestoreBackupContext = None,
  root_password: str = None,
  settings: GoogleSqlDatabaseInstanceSettings = None,
  timeouts: GoogleSqlDatabaseInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.databaseVersion">database_version</a></code> | <code>str</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.encryptionKeyName">encryption_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#encryption_key_name GoogleSqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#id GoogleSqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.maintenanceVersion">maintenance_version</a></code> | <code>str</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.masterInstanceName">master_instance_name</a></code> | <code>str</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.region">region</a></code> | <code>str</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicaNames">replica_names</a></code> | <code>typing.List[str]</code> | The replicas of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicationCluster">replication_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a></code> | replication_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.restoreBackupContext">restore_backup_context</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.rootPassword">root_password</a></code> | <code>str</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_version GoogleSqlDatabaseInstance#database_version}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.clone"></a>

```python
clone: GoogleSqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#clone GoogleSqlDatabaseInstance#clone}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deletion_protection GoogleSqlDatabaseInstance#deletion_protection}

---

##### `encryption_key_name`<sup>Optional</sup> <a name="encryption_key_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.encryptionKeyName"></a>

```python
encryption_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#encryption_key_name GoogleSqlDatabaseInstance#encryption_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#id GoogleSqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#instance_type GoogleSqlDatabaseInstance#instance_type}

---

##### `maintenance_version`<sup>Optional</sup> <a name="maintenance_version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.maintenanceVersion"></a>

```python
maintenance_version: str
```

- *Type:* str

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#maintenance_version GoogleSqlDatabaseInstance#maintenance_version}

---

##### `master_instance_name`<sup>Optional</sup> <a name="master_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.masterInstanceName"></a>

```python
master_instance_name: str
```

- *Type:* str

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#master_instance_name GoogleSqlDatabaseInstance#master_instance_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#region GoogleSqlDatabaseInstance#region}

---

##### `replica_configuration`<sup>Optional</sup> <a name="replica_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicaConfiguration"></a>

```python
replica_configuration: GoogleSqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replica_configuration GoogleSqlDatabaseInstance#replica_configuration}

---

##### `replica_names`<sup>Optional</sup> <a name="replica_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicaNames"></a>

```python
replica_names: typing.List[str]
```

- *Type:* typing.List[str]

The replicas of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replica_names GoogleSqlDatabaseInstance#replica_names}

---

##### `replication_cluster`<sup>Optional</sup> <a name="replication_cluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.replicationCluster"></a>

```python
replication_cluster: GoogleSqlDatabaseInstanceReplicationCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a>

replication_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#replication_cluster GoogleSqlDatabaseInstance#replication_cluster}

---

##### `restore_backup_context`<sup>Optional</sup> <a name="restore_backup_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.restoreBackupContext"></a>

```python
restore_backup_context: GoogleSqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#restore_backup_context GoogleSqlDatabaseInstance#restore_backup_context}

---

##### `root_password`<sup>Optional</sup> <a name="root_password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.rootPassword"></a>

```python
root_password: str
```

- *Type:* str

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#root_password GoogleSqlDatabaseInstance#root_password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.settings"></a>

```python
settings: GoogleSqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#settings GoogleSqlDatabaseInstance#settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleSqlDatabaseInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#timeouts GoogleSqlDatabaseInstance#timeouts}

---

### GoogleSqlDatabaseInstanceIpAddress <a name="GoogleSqlDatabaseInstanceIpAddress" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddress()
```


### GoogleSqlDatabaseInstanceReplicaConfiguration <a name="GoogleSqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration(
  ca_certificate: str = None,
  cascadable_replica: typing.Union[bool, IResolvable] = None,
  client_certificate: str = None,
  client_key: str = None,
  connect_retry_interval: typing.Union[int, float] = None,
  dump_file_path: str = None,
  failover_target: typing.Union[bool, IResolvable] = None,
  master_heartbeat_period: typing.Union[int, float] = None,
  password: str = None,
  ssl_cipher: str = None,
  username: str = None,
  verify_server_certificate: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM representation of the trusted CA's x509 certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.cascadableReplica">cascadable_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if a SQL Server replica is a cascadable replica. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM representation of the replica's x509 certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.clientKey">client_key</a></code> | <code>str</code> | PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval">connect_retry_interval</a></code> | <code>typing.Union[int, float]</code> | The number of seconds between connect retries. MySQL's default is 60 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath">dump_file_path</a></code> | <code>str</code> | Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.failoverTarget">failover_target</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the replica is the failover target. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod">master_heartbeat_period</a></code> | <code>typing.Union[int, float]</code> | Time in ms between replication heartbeats. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.password">password</a></code> | <code>str</code> | Password for the replication connection. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.sslCipher">ssl_cipher</a></code> | <code>str</code> | Permissible ciphers for use in SSL encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.username">username</a></code> | <code>str</code> | Username for replication connection. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate">verify_server_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the master's common name value is checked during the SSL handshake. |

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ca_certificate GoogleSqlDatabaseInstance#ca_certificate}

---

##### `cascadable_replica`<sup>Optional</sup> <a name="cascadable_replica" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.cascadableReplica"></a>

```python
cascadable_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if a SQL Server replica is a cascadable replica.

A cascadable replica is a SQL Server cross region replica that supports replica(s) under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#cascadable_replica GoogleSqlDatabaseInstance#cascadable_replica}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#client_certificate GoogleSqlDatabaseInstance#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#client_key GoogleSqlDatabaseInstance#client_key}

---

##### `connect_retry_interval`<sup>Optional</sup> <a name="connect_retry_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval"></a>

```python
connect_retry_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#connect_retry_interval GoogleSqlDatabaseInstance#connect_retry_interval}

---

##### `dump_file_path`<sup>Optional</sup> <a name="dump_file_path" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath"></a>

```python
dump_file_path: str
```

- *Type:* str

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#dump_file_path GoogleSqlDatabaseInstance#dump_file_path}

---

##### `failover_target`<sup>Optional</sup> <a name="failover_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.failoverTarget"></a>

```python
failover_target: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#failover_target GoogleSqlDatabaseInstance#failover_target}

---

##### `master_heartbeat_period`<sup>Optional</sup> <a name="master_heartbeat_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod"></a>

```python
master_heartbeat_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#master_heartbeat_period GoogleSqlDatabaseInstance#master_heartbeat_period}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password GoogleSqlDatabaseInstance#password}

---

##### `ssl_cipher`<sup>Optional</sup> <a name="ssl_cipher" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.sslCipher"></a>

```python
ssl_cipher: str
```

- *Type:* str

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ssl_cipher GoogleSqlDatabaseInstance#ssl_cipher}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.username"></a>

```python
username: str
```

- *Type:* str

Username for replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#username GoogleSqlDatabaseInstance#username}

---

##### `verify_server_certificate`<sup>Optional</sup> <a name="verify_server_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate"></a>

```python
verify_server_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#verify_server_certificate GoogleSqlDatabaseInstance#verify_server_certificate}

---

### GoogleSqlDatabaseInstanceReplicationCluster <a name="GoogleSqlDatabaseInstanceReplicationCluster" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster(
  failover_dr_replica_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster.property.failoverDrReplicaName">failover_dr_replica_name</a></code> | <code>str</code> | If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica. |

---

##### `failover_dr_replica_name`<sup>Optional</sup> <a name="failover_dr_replica_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster.property.failoverDrReplicaName"></a>

```python
failover_dr_replica_name: str
```

- *Type:* str

If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica.

The standard format of this field is "your-project:your-instance". You can also set this field to "your-instance", but cloud SQL backend will convert it to the aforementioned standard format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#failover_dr_replica_name GoogleSqlDatabaseInstance#failover_dr_replica_name}

---

### GoogleSqlDatabaseInstanceRestoreBackupContext <a name="GoogleSqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext(
  backup_run_id: typing.Union[int, float],
  instance_id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.backupRunId">backup_run_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the backup run to restore from. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance that the backup was taken from. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.project">project</a></code> | <code>str</code> | The full project ID of the source instance. |

---

##### `backup_run_id`<sup>Required</sup> <a name="backup_run_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.backupRunId"></a>

```python
backup_run_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_run_id GoogleSqlDatabaseInstance#backup_run_id}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#instance_id GoogleSqlDatabaseInstance#instance_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext.property.project"></a>

```python
project: str
```

- *Type:* str

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#project GoogleSqlDatabaseInstance#project}

---

### GoogleSqlDatabaseInstanceServerCaCert <a name="GoogleSqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCert.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCert()
```


### GoogleSqlDatabaseInstanceSettings <a name="GoogleSqlDatabaseInstanceSettings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings(
  tier: str,
  activation_policy: str = None,
  active_directory_config: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig = None,
  advanced_machine_features: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures = None,
  availability_type: str = None,
  backup_configuration: GoogleSqlDatabaseInstanceSettingsBackupConfiguration = None,
  collation: str = None,
  connector_enforcement: str = None,
  database_flags: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]] = None,
  data_cache_config: GoogleSqlDatabaseInstanceSettingsDataCacheConfig = None,
  deletion_protection_enabled: typing.Union[bool, IResolvable] = None,
  deny_maintenance_period: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod = None,
  disk_autoresize: typing.Union[bool, IResolvable] = None,
  disk_autoresize_limit: typing.Union[int, float] = None,
  disk_size: typing.Union[int, float] = None,
  disk_type: str = None,
  edition: str = None,
  enable_dataplex_integration: typing.Union[bool, IResolvable] = None,
  enable_google_ml_integration: typing.Union[bool, IResolvable] = None,
  insights_config: GoogleSqlDatabaseInstanceSettingsInsightsConfig = None,
  ip_configuration: GoogleSqlDatabaseInstanceSettingsIpConfiguration = None,
  location_preference: GoogleSqlDatabaseInstanceSettingsLocationPreference = None,
  maintenance_window: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow = None,
  password_validation_policy: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy = None,
  pricing_plan: str = None,
  sql_server_audit_config: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig = None,
  time_zone: str = None,
  user_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.tier">tier</a></code> | <code>str</code> | The machine type to use. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.activationPolicy">activation_policy</a></code> | <code>str</code> | This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.availabilityType">availability_type</a></code> | <code>str</code> | The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.backupConfiguration">backup_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | backup_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.collation">collation</a></code> | <code>str</code> | The name of server instance collation. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.connectorEnforcement">connector_enforcement</a></code> | <code>str</code> | Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.databaseFlags">database_flags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]</code> | database_flags block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a></code> | data_cache_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configuration to protect against accidental instance deletion. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskAutoresize">disk_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables auto-resizing of the storage size. Defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskAutoresizeLimit">disk_autoresize_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum size, in GB, to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | The size of data disk, in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskType">disk_type</a></code> | <code>str</code> | The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.edition">edition</a></code> | <code>str</code> | The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.enableDataplexIntegration">enable_dataplex_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Dataplex Integration. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.enableGoogleMlIntegration">enable_google_ml_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Vertex AI Integration. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.insightsConfig">insights_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.locationPreference">location_preference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | location_preference block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.passwordValidationPolicy">password_validation_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | password_validation_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | Pricing plan for this instance, can only be PER_USE. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.sqlServerAuditConfig">sql_server_audit_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | sql_server_audit_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.timeZone">time_zone</a></code> | <code>str</code> | The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value user label pairs to assign to the instance. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.tier"></a>

```python
tier: str
```

- *Type:* str

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#tier GoogleSqlDatabaseInstance#tier}

---

##### `activation_policy`<sup>Optional</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#activation_policy GoogleSqlDatabaseInstance#activation_policy}

---

##### `active_directory_config`<sup>Optional</sup> <a name="active_directory_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.activeDirectoryConfig"></a>

```python
active_directory_config: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#active_directory_config GoogleSqlDatabaseInstance#active_directory_config}

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#advanced_machine_features GoogleSqlDatabaseInstance#advanced_machine_features}

---

##### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#availability_type GoogleSqlDatabaseInstance#availability_type}

---

##### `backup_configuration`<sup>Optional</sup> <a name="backup_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.backupConfiguration"></a>

```python
backup_configuration: GoogleSqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_configuration GoogleSqlDatabaseInstance#backup_configuration}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.collation"></a>

```python
collation: str
```

- *Type:* str

The name of server instance collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#collation GoogleSqlDatabaseInstance#collation}

---

##### `connector_enforcement`<sup>Optional</sup> <a name="connector_enforcement" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.connectorEnforcement"></a>

```python
connector_enforcement: str
```

- *Type:* str

Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections.

If enabled, all the direct connections are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#connector_enforcement GoogleSqlDatabaseInstance#connector_enforcement}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.databaseFlags"></a>

```python
database_flags: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]

database_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#database_flags GoogleSqlDatabaseInstance#database_flags}

---

##### `data_cache_config`<sup>Optional</sup> <a name="data_cache_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.dataCacheConfig"></a>

```python
data_cache_config: GoogleSqlDatabaseInstanceSettingsDataCacheConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#data_cache_config GoogleSqlDatabaseInstance#data_cache_config}

---

##### `deletion_protection_enabled`<sup>Optional</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deletion_protection_enabled GoogleSqlDatabaseInstance#deletion_protection_enabled}

---

##### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#deny_maintenance_period GoogleSqlDatabaseInstance#deny_maintenance_period}

---

##### `disk_autoresize`<sup>Optional</sup> <a name="disk_autoresize" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskAutoresize"></a>

```python
disk_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_autoresize GoogleSqlDatabaseInstance#disk_autoresize}

---

##### `disk_autoresize_limit`<sup>Optional</sup> <a name="disk_autoresize_limit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskAutoresizeLimit"></a>

```python
disk_autoresize_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_autoresize_limit GoogleSqlDatabaseInstance#disk_autoresize_limit}

---

##### `disk_size`<sup>Optional</sup> <a name="disk_size" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_size GoogleSqlDatabaseInstance#disk_size}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disk_type GoogleSqlDatabaseInstance#disk_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.edition"></a>

```python
edition: str
```

- *Type:* str

The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#edition GoogleSqlDatabaseInstance#edition}

---

##### `enable_dataplex_integration`<sup>Optional</sup> <a name="enable_dataplex_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.enableDataplexIntegration"></a>

```python
enable_dataplex_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Dataplex Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_dataplex_integration GoogleSqlDatabaseInstance#enable_dataplex_integration}

---

##### `enable_google_ml_integration`<sup>Optional</sup> <a name="enable_google_ml_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.enableGoogleMlIntegration"></a>

```python
enable_google_ml_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Vertex AI Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_google_ml_integration GoogleSqlDatabaseInstance#enable_google_ml_integration}

---

##### `insights_config`<sup>Optional</sup> <a name="insights_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.insightsConfig"></a>

```python
insights_config: GoogleSqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#insights_config GoogleSqlDatabaseInstance#insights_config}

---

##### `ip_configuration`<sup>Optional</sup> <a name="ip_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.ipConfiguration"></a>

```python
ip_configuration: GoogleSqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ip_configuration GoogleSqlDatabaseInstance#ip_configuration}

---

##### `location_preference`<sup>Optional</sup> <a name="location_preference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.locationPreference"></a>

```python
location_preference: GoogleSqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#location_preference GoogleSqlDatabaseInstance#location_preference}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#maintenance_window GoogleSqlDatabaseInstance#maintenance_window}

---

##### `password_validation_policy`<sup>Optional</sup> <a name="password_validation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.passwordValidationPolicy"></a>

```python
password_validation_policy: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password_validation_policy GoogleSqlDatabaseInstance#password_validation_policy}

---

##### `pricing_plan`<sup>Optional</sup> <a name="pricing_plan" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#pricing_plan GoogleSqlDatabaseInstance#pricing_plan}

---

##### `sql_server_audit_config`<sup>Optional</sup> <a name="sql_server_audit_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.sqlServerAuditConfig"></a>

```python
sql_server_audit_config: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#sql_server_audit_config GoogleSqlDatabaseInstance#sql_server_audit_config}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#time_zone GoogleSqlDatabaseInstance#time_zone}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#user_labels GoogleSqlDatabaseInstance#user_labels}

---

### GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig(
  domain: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain">domain</a></code> | <code>str</code> | Domain name of the Active Directory for SQL Server (e.g., mydomain.com). |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#domain GoogleSqlDatabaseInstance#domain}

---

### GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures(
  threads_per_core: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number of threads per physical core. Can be 1 or 2. |

---

##### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of threads per physical core. Can be 1 or 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#threads_per_core GoogleSqlDatabaseInstance#threads_per_core}

---

### GoogleSqlDatabaseInstanceSettingsBackupConfiguration <a name="GoogleSqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration(
  backup_retention_settings: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings = None,
  binary_log_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  point_in_time_recovery_enabled: typing.Union[bool, IResolvable] = None,
  start_time: str = None,
  transaction_log_retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings">backup_retention_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | backup_retention_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled">binary_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if binary logging is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if backup configuration is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.location">location</a></code> | <code>str</code> | Location of the backup configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if Point-in-time recovery is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.startTime">start_time</a></code> | <code>str</code> | HH:MM format time indicating when backup configuration starts. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays">transaction_log_retention_days</a></code> | <code>typing.Union[int, float]</code> | The number of days of transaction logs we retain for point in time restore, from 1-7. |

---

##### `backup_retention_settings`<sup>Optional</sup> <a name="backup_retention_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings"></a>

```python
backup_retention_settings: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_retention_settings GoogleSqlDatabaseInstance#backup_retention_settings}

---

##### `binary_log_enabled`<sup>Optional</sup> <a name="binary_log_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled"></a>

```python
binary_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#binary_log_enabled GoogleSqlDatabaseInstance#binary_log_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the backup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#location GoogleSqlDatabaseInstance#location}

---

##### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#point_in_time_recovery_enabled GoogleSqlDatabaseInstance#point_in_time_recovery_enabled}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#start_time GoogleSqlDatabaseInstance#start_time}

---

##### `transaction_log_retention_days`<sup>Optional</sup> <a name="transaction_log_retention_days" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays"></a>

```python
transaction_log_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days of transaction logs we retain for point in time restore, from 1-7.

(For PostgreSQL Enterprise Plus instances, from 1 to 35.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#transaction_log_retention_days GoogleSqlDatabaseInstance#transaction_log_retention_days}

---

### GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings(
  retained_backups: typing.Union[int, float],
  retention_unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups">retained_backups</a></code> | <code>typing.Union[int, float]</code> | Number of backups to retain. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit">retention_unit</a></code> | <code>str</code> | The unit that 'retainedBackups' represents. Defaults to COUNT. |

---

##### `retained_backups`<sup>Required</sup> <a name="retained_backups" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups"></a>

```python
retained_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retained_backups GoogleSqlDatabaseInstance#retained_backups}

---

##### `retention_unit`<sup>Optional</sup> <a name="retention_unit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retention_unit GoogleSqlDatabaseInstance#retention_unit}

---

### GoogleSqlDatabaseInstanceSettingsDatabaseFlags <a name="GoogleSqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags.property.name">name</a></code> | <code>str</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags.property.value">value</a></code> | <code>str</code> | Value of the flag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}

---

### GoogleSqlDatabaseInstanceSettingsDataCacheConfig <a name="GoogleSqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig(
  data_cache_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled">data_cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether data cache is enabled for the instance. |

---

##### `data_cache_enabled`<sup>Optional</sup> <a name="data_cache_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled"></a>

```python
data_cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether data cache is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#data_cache_enabled GoogleSqlDatabaseInstance#data_cache_enabled}

---

### GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod(
  end_date: str,
  start_date: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate">end_date</a></code> | <code>str</code> | End date before which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate">start_date</a></code> | <code>str</code> | Start date after which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time">time</a></code> | <code>str</code> | Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. |

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#end_date GoogleSqlDatabaseInstance#end_date}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#start_date GoogleSqlDatabaseInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time"></a>

```python
time: str
```

- *Type:* str

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#time GoogleSqlDatabaseInstance#time}

---

### GoogleSqlDatabaseInstanceSettingsInsightsConfig <a name="GoogleSqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig(
  query_insights_enabled: typing.Union[bool, IResolvable] = None,
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled">query_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if Query Insights feature is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if Query Insights will record application tags from query when enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if Query Insights will record client address when enabled. |

---

##### `query_insights_enabled`<sup>Optional</sup> <a name="query_insights_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled"></a>

```python
query_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_insights_enabled GoogleSqlDatabaseInstance#query_insights_enabled}

---

##### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_plans_per_minute GoogleSqlDatabaseInstance#query_plans_per_minute}

---

##### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_string_length GoogleSqlDatabaseInstance#query_string_length}

---

##### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#record_application_tags GoogleSqlDatabaseInstance#record_application_tags}

---

##### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#record_client_address GoogleSqlDatabaseInstance#record_client_address}

---

### GoogleSqlDatabaseInstanceSettingsIpConfiguration <a name="GoogleSqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration(
  allocated_ip_range: str = None,
  authorized_networks: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]] = None,
  enable_private_path_for_google_cloud_services: typing.Union[bool, IResolvable] = None,
  ipv4_enabled: typing.Union[bool, IResolvable] = None,
  private_network: str = None,
  psc_config: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]] = None,
  server_ca_mode: str = None,
  server_ca_pool: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks">authorized_networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices">enable_private_path_for_google_cloud_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled">ipv4_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this Cloud SQL instance should be assigned a public IPV4 address. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork">private_network</a></code> | <code>str</code> | The VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig">psc_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]</code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode">server_ca_mode</a></code> | <code>str</code> | Specify how the server certificate's Certificate Authority is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.serverCaPool">server_ca_pool</a></code> | <code>str</code> | The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode". |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.sslMode">ssl_mode</a></code> | <code>str</code> | Specify how SSL connection should be enforced in DB connections. |

---

##### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}

---

##### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks"></a>

```python
authorized_networks: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#authorized_networks GoogleSqlDatabaseInstance#authorized_networks}

---

##### `enable_private_path_for_google_cloud_services`<sup>Optional</sup> <a name="enable_private_path_for_google_cloud_services" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices"></a>

```python
enable_private_path_for_google_cloud_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_private_path_for_google_cloud_services GoogleSqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

##### `ipv4_enabled`<sup>Optional</sup> <a name="ipv4_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled"></a>

```python
ipv4_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ipv4_enabled GoogleSqlDatabaseInstance#ipv4_enabled}

---

##### `private_network`<sup>Optional</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork"></a>

```python
private_network: str
```

- *Type:* str

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#private_network GoogleSqlDatabaseInstance#private_network}

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig"></a>

```python
psc_config: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#psc_config GoogleSqlDatabaseInstance#psc_config}

---

##### `server_ca_mode`<sup>Optional</sup> <a name="server_ca_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode"></a>

```python
server_ca_mode: str
```

- *Type:* str

Specify how the server certificate's Certificate Authority is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#server_ca_mode GoogleSqlDatabaseInstance#server_ca_mode}

---

##### `server_ca_pool`<sup>Optional</sup> <a name="server_ca_pool" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.serverCaPool"></a>

```python
server_ca_pool: str
```

- *Type:* str

The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#server_ca_pool GoogleSqlDatabaseInstance#server_ca_pool}

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Specify how SSL connection should be enforced in DB connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ssl_mode GoogleSqlDatabaseInstance#ssl_mode}

---

### GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks(
  value: str,
  expiration_time: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime">expiration_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#expiration_time GoogleSqlDatabaseInstance#expiration_time}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#value GoogleSqlDatabaseInstance#value}.

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#expiration_time GoogleSqlDatabaseInstance#expiration_time}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#name GoogleSqlDatabaseInstance#name}.

---

### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig(
  allowed_consumer_projects: typing.List[str] = None,
  psc_auto_connections: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]] = None,
  psc_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | List of consumer projects that are allow-listed for PSC connections to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscAutoConnections">psc_auto_connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]</code> | psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled">psc_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether PSC connectivity is enabled for this instance. |

---

##### `allowed_consumer_projects`<sup>Optional</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

List of consumer projects that are allow-listed for PSC connections to this instance.

This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#allowed_consumer_projects GoogleSqlDatabaseInstance#allowed_consumer_projects}

---

##### `psc_auto_connections`<sup>Optional</sup> <a name="psc_auto_connections" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscAutoConnections"></a>

```python
psc_auto_connections: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]

psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#psc_auto_connections GoogleSqlDatabaseInstance#psc_auto_connections}

---

##### `psc_enabled`<sup>Optional</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled"></a>

```python
psc_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether PSC connectivity is enabled for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#psc_enabled GoogleSqlDatabaseInstance#psc_enabled}

---

### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections(
  consumer_network: str,
  consumer_service_project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | The consumer network of this consumer endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerServiceProjectId">consumer_service_project_id</a></code> | <code>str</code> | The project ID of consumer service project of this consumer endpoint. |

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

The consumer network of this consumer endpoint.

This must be a resource path that includes both the host project and the network name. The consumer host project of this network might be different from the consumer service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#consumer_network GoogleSqlDatabaseInstance#consumer_network}

---

##### `consumer_service_project_id`<sup>Optional</sup> <a name="consumer_service_project_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections.property.consumerServiceProjectId"></a>

```python
consumer_service_project_id: str
```

- *Type:* str

The project ID of consumer service project of this consumer endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#consumer_service_project_id GoogleSqlDatabaseInstance#consumer_service_project_id}

---

### GoogleSqlDatabaseInstanceSettingsLocationPreference <a name="GoogleSqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference(
  follow_gae_application: str = None,
  secondary_zone: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication">follow_gae_application</a></code> | <code>str</code> | A Google App Engine application whose zone to remain in. Must be in the same region as this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone">secondary_zone</a></code> | <code>str</code> | The preferred Compute Engine zone for the secondary/failover. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.zone">zone</a></code> | <code>str</code> | The preferred compute engine zone. |

---

##### `follow_gae_application`<sup>Optional</sup> <a name="follow_gae_application" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication"></a>

```python
follow_gae_application: str
```

- *Type:* str

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#follow_gae_application GoogleSqlDatabaseInstance#follow_gae_application}

---

##### `secondary_zone`<sup>Optional</sup> <a name="secondary_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone"></a>

```python
secondary_zone: str
```

- *Type:* str

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#secondary_zone GoogleSqlDatabaseInstance#secondary_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference.property.zone"></a>

```python
zone: str
```

- *Type:* str

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#zone GoogleSqlDatabaseInstance#zone}

---

### GoogleSqlDatabaseInstanceSettingsMaintenanceWindow <a name="GoogleSqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow(
  day: typing.Union[int, float] = None,
  hour: typing.Union[int, float] = None,
  update_track: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of week (1-7), starting on Monday. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Hour of day (0-23), ignored if day not set. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack">update_track</a></code> | <code>str</code> | Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#day GoogleSqlDatabaseInstance#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#hour GoogleSqlDatabaseInstance#hour}

---

##### `update_track`<sup>Optional</sup> <a name="update_track" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack"></a>

```python
update_track: str
```

- *Type:* str

Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#update_track GoogleSqlDatabaseInstance#update_track}

---

### GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy(
  enable_password_policy: typing.Union[bool, IResolvable],
  complexity: str = None,
  disallow_username_substring: typing.Union[bool, IResolvable] = None,
  min_length: typing.Union[int, float] = None,
  password_change_interval: str = None,
  reuse_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy">enable_password_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the password policy is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity">complexity</a></code> | <code>str</code> | Password complexity. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring">disallow_username_substring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disallow username as a part of the password. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum number of characters allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval">password_change_interval</a></code> | <code>str</code> | Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval">reuse_interval</a></code> | <code>typing.Union[int, float]</code> | Number of previous passwords that cannot be reused. |

---

##### `enable_password_policy`<sup>Required</sup> <a name="enable_password_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy"></a>

```python
enable_password_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_password_policy GoogleSqlDatabaseInstance#enable_password_policy}

---

##### `complexity`<sup>Optional</sup> <a name="complexity" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity"></a>

```python
complexity: str
```

- *Type:* str

Password complexity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#complexity GoogleSqlDatabaseInstance#complexity}

---

##### `disallow_username_substring`<sup>Optional</sup> <a name="disallow_username_substring" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring"></a>

```python
disallow_username_substring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disallow_username_substring GoogleSqlDatabaseInstance#disallow_username_substring}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#min_length GoogleSqlDatabaseInstance#min_length}

---

##### `password_change_interval`<sup>Optional</sup> <a name="password_change_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval"></a>

```python
password_change_interval: str
```

- *Type:* str

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password_change_interval GoogleSqlDatabaseInstance#password_change_interval}

---

##### `reuse_interval`<sup>Optional</sup> <a name="reuse_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval"></a>

```python
reuse_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#reuse_interval GoogleSqlDatabaseInstance#reuse_interval}

---

### GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig(
  bucket: str = None,
  retention_interval: str = None,
  upload_interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the destination bucket (e.g., gs://mybucket). |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval">retention_interval</a></code> | <code>str</code> | How long to keep generated audit files. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval">upload_interval</a></code> | <code>str</code> | How often to upload generated audit files. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#bucket GoogleSqlDatabaseInstance#bucket}

---

##### `retention_interval`<sup>Optional</sup> <a name="retention_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval"></a>

```python
retention_interval: str
```

- *Type:* str

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retention_interval GoogleSqlDatabaseInstance#retention_interval}

---

##### `upload_interval`<sup>Optional</sup> <a name="upload_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval"></a>

```python
upload_interval: str
```

- *Type:* str

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#upload_interval GoogleSqlDatabaseInstance#upload_interval}

---

### GoogleSqlDatabaseInstanceTimeouts <a name="GoogleSqlDatabaseInstanceTimeouts" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#create GoogleSqlDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#delete GoogleSqlDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#update GoogleSqlDatabaseInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#create GoogleSqlDatabaseInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#delete GoogleSqlDatabaseInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#update GoogleSqlDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSqlDatabaseInstanceCloneOutputReference <a name="GoogleSqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange">reset_allocated_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetDatabaseNames">reset_database_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetPointInTime">reset_point_in_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetPreferredZone">reset_preferred_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocated_ip_range` <a name="reset_allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange"></a>

```python
def reset_allocated_ip_range() -> None
```

##### `reset_database_names` <a name="reset_database_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetDatabaseNames"></a>

```python
def reset_database_names() -> None
```

##### `reset_point_in_time` <a name="reset_point_in_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetPointInTime"></a>

```python
def reset_point_in_time() -> None
```

##### `reset_preferred_zone` <a name="reset_preferred_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.resetPreferredZone"></a>

```python
def reset_preferred_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput">allocated_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput">database_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput">point_in_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput">preferred_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput">source_instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames">database_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime">point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZone">preferred_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">source_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range_input`<sup>Optional</sup> <a name="allocated_ip_range_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput"></a>

```python
allocated_ip_range_input: str
```

- *Type:* str

---

##### `database_names_input`<sup>Optional</sup> <a name="database_names_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput"></a>

```python
database_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `point_in_time_input`<sup>Optional</sup> <a name="point_in_time_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput"></a>

```python
point_in_time_input: str
```

- *Type:* str

---

##### `preferred_zone_input`<sup>Optional</sup> <a name="preferred_zone_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput"></a>

```python
preferred_zone_input: str
```

- *Type:* str

---

##### `source_instance_name_input`<sup>Optional</sup> <a name="source_instance_name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput"></a>

```python
source_instance_name_input: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `database_names`<sup>Required</sup> <a name="database_names" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```python
database_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `point_in_time`<sup>Required</sup> <a name="point_in_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```python
point_in_time: str
```

- *Type:* str

---

##### `preferred_zone`<sup>Required</sup> <a name="preferred_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.preferredZone"></a>

```python
preferred_zone: str
```

- *Type:* str

---

##### `source_instance_name`<sup>Required</sup> <a name="source_instance_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```python
source_instance_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceClone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceClone">GoogleSqlDatabaseInstanceClone</a>

---


### GoogleSqlDatabaseInstanceIpAddressList <a name="GoogleSqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSqlDatabaseInstanceIpAddressOutputReference <a name="GoogleSqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">time_to_retire</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddress">GoogleSqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `time_to_retire`<sup>Required</sup> <a name="time_to_retire" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```python
time_to_retire: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceIpAddress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceIpAddress">GoogleSqlDatabaseInstanceIpAddress</a>

---


### GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference <a name="GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetCascadableReplica">reset_cascadable_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval">reset_connect_retry_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath">reset_dump_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget">reset_failover_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod">reset_master_heartbeat_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher">reset_ssl_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate">reset_verify_server_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_cascadable_replica` <a name="reset_cascadable_replica" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetCascadableReplica"></a>

```python
def reset_cascadable_replica() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_connect_retry_interval` <a name="reset_connect_retry_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval"></a>

```python
def reset_connect_retry_interval() -> None
```

##### `reset_dump_file_path` <a name="reset_dump_file_path" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath"></a>

```python
def reset_dump_file_path() -> None
```

##### `reset_failover_target` <a name="reset_failover_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget"></a>

```python
def reset_failover_target() -> None
```

##### `reset_master_heartbeat_period` <a name="reset_master_heartbeat_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod"></a>

```python
def reset_master_heartbeat_period() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_ssl_cipher` <a name="reset_ssl_cipher" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher"></a>

```python
def reset_ssl_cipher() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_verify_server_certificate` <a name="reset_verify_server_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate"></a>

```python
def reset_verify_server_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplicaInput">cascadable_replica_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput">connect_retry_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput">dump_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput">failover_target_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput">master_heartbeat_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput">ssl_cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput">verify_server_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica">cascadable_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">connect_retry_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">dump_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">failover_target</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">master_heartbeat_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">ssl_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">verify_server_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `cascadable_replica_input`<sup>Optional</sup> <a name="cascadable_replica_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplicaInput"></a>

```python
cascadable_replica_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `connect_retry_interval_input`<sup>Optional</sup> <a name="connect_retry_interval_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput"></a>

```python
connect_retry_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dump_file_path_input`<sup>Optional</sup> <a name="dump_file_path_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput"></a>

```python
dump_file_path_input: str
```

- *Type:* str

---

##### `failover_target_input`<sup>Optional</sup> <a name="failover_target_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput"></a>

```python
failover_target_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_heartbeat_period_input`<sup>Optional</sup> <a name="master_heartbeat_period_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput"></a>

```python
master_heartbeat_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `ssl_cipher_input`<sup>Optional</sup> <a name="ssl_cipher_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput"></a>

```python
ssl_cipher_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `verify_server_certificate_input`<sup>Optional</sup> <a name="verify_server_certificate_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput"></a>

```python
verify_server_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `cascadable_replica`<sup>Required</sup> <a name="cascadable_replica" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.cascadableReplica"></a>

```python
cascadable_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `connect_retry_interval`<sup>Required</sup> <a name="connect_retry_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```python
connect_retry_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dump_file_path`<sup>Required</sup> <a name="dump_file_path" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```python
dump_file_path: str
```

- *Type:* str

---

##### `failover_target`<sup>Required</sup> <a name="failover_target" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```python
failover_target: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_heartbeat_period`<sup>Required</sup> <a name="master_heartbeat_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```python
master_heartbeat_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssl_cipher`<sup>Required</sup> <a name="ssl_cipher" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```python
ssl_cipher: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `verify_server_certificate`<sup>Required</sup> <a name="verify_server_certificate" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```python
verify_server_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicaConfiguration">GoogleSqlDatabaseInstanceReplicaConfiguration</a>

---


### GoogleSqlDatabaseInstanceReplicationClusterOutputReference <a name="GoogleSqlDatabaseInstanceReplicationClusterOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.resetFailoverDrReplicaName">reset_failover_dr_replica_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failover_dr_replica_name` <a name="reset_failover_dr_replica_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.resetFailoverDrReplicaName"></a>

```python
def reset_failover_dr_replica_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica">dr_replica</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaNameInput">failover_dr_replica_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName">failover_dr_replica_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dr_replica`<sup>Required</sup> <a name="dr_replica" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.drReplica"></a>

```python
dr_replica: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `failover_dr_replica_name_input`<sup>Optional</sup> <a name="failover_dr_replica_name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaNameInput"></a>

```python
failover_dr_replica_name_input: str
```

- *Type:* str

---

##### `failover_dr_replica_name`<sup>Required</sup> <a name="failover_dr_replica_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.failoverDrReplicaName"></a>

```python
failover_dr_replica_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationClusterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceReplicationCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceReplicationCluster">GoogleSqlDatabaseInstanceReplicationCluster</a>

---


### GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference <a name="GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput">backup_run_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">backup_run_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_run_id_input`<sup>Optional</sup> <a name="backup_run_id_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput"></a>

```python
backup_run_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `backup_run_id`<sup>Required</sup> <a name="backup_run_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```python
backup_run_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceRestoreBackupContext
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceRestoreBackupContext">GoogleSqlDatabaseInstanceRestoreBackupContext</a>

---


### GoogleSqlDatabaseInstanceServerCaCertList <a name="GoogleSqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSqlDatabaseInstanceServerCaCertOutputReference <a name="GoogleSqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">sha1_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCert">GoogleSqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `sha1_fingerprint`<sup>Required</sup> <a name="sha1_fingerprint" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```python
sha1_fingerprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceServerCaCert
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceServerCaCert">GoogleSqlDatabaseInstanceServerCaCert</a>

---


### GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">reset_threads_per_core</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_threads_per_core` <a name="reset_threads_per_core" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```python
def reset_threads_per_core() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit">reset_retention_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_unit` <a name="reset_retention_unit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit"></a>

```python
def reset_retention_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput">retained_backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput">retention_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retained_backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retention_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retained_backups_input`<sup>Optional</sup> <a name="retained_backups_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput"></a>

```python
retained_backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit_input`<sup>Optional</sup> <a name="retention_unit_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput"></a>

```python
retention_unit_input: str
```

- *Type:* str

---

##### `retained_backups`<sup>Required</sup> <a name="retained_backups" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```python
retained_backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_unit`<sup>Required</sup> <a name="retention_unit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```python
retention_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings">put_backup_retention_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings">reset_backup_retention_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled">reset_binary_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled">reset_point_in_time_recovery_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays">reset_transaction_log_retention_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_retention_settings` <a name="put_backup_retention_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings"></a>

```python
def put_backup_retention_settings(
  retained_backups: typing.Union[int, float],
  retention_unit: str = None
) -> None
```

###### `retained_backups`<sup>Required</sup> <a name="retained_backups" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.retainedBackups"></a>

- *Type:* typing.Union[int, float]

Number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retained_backups GoogleSqlDatabaseInstance#retained_backups}

---

###### `retention_unit`<sup>Optional</sup> <a name="retention_unit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.retentionUnit"></a>

- *Type:* str

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retention_unit GoogleSqlDatabaseInstance#retention_unit}

---

##### `reset_backup_retention_settings` <a name="reset_backup_retention_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings"></a>

```python
def reset_backup_retention_settings() -> None
```

##### `reset_binary_log_enabled` <a name="reset_binary_log_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled"></a>

```python
def reset_binary_log_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_point_in_time_recovery_enabled` <a name="reset_point_in_time_recovery_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```python
def reset_point_in_time_recovery_enabled() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_transaction_log_retention_days` <a name="reset_transaction_log_retention_days" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays"></a>

```python
def reset_transaction_log_retention_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backup_retention_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput">backup_retention_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput">binary_log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput">point_in_time_recovery_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput">transaction_log_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binary_log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transaction_log_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_retention_settings`<sup>Required</sup> <a name="backup_retention_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```python
backup_retention_settings: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a>

---

##### `backup_retention_settings_input`<sup>Optional</sup> <a name="backup_retention_settings_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput"></a>

```python
backup_retention_settings_input: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `binary_log_enabled_input`<sup>Optional</sup> <a name="binary_log_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput"></a>

```python
binary_log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled_input`<sup>Optional</sup> <a name="point_in_time_recovery_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```python
point_in_time_recovery_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `transaction_log_retention_days_input`<sup>Optional</sup> <a name="transaction_log_retention_days_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput"></a>

```python
transaction_log_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binary_log_enabled`<sup>Required</sup> <a name="binary_log_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```python
binary_log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled`<sup>Required</sup> <a name="point_in_time_recovery_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `transaction_log_retention_days`<sup>Required</sup> <a name="transaction_log_retention_days" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```python
transaction_log_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList <a name="GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]

---


### GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSqlDatabaseInstanceSettingsDatabaseFlags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]

---


### GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled">reset_data_cache_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_cache_enabled` <a name="reset_data_cache_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled"></a>

```python
def reset_data_cache_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput">data_cache_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">data_cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_cache_enabled_input`<sup>Optional</sup> <a name="data_cache_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput"></a>

```python
data_cache_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_cache_enabled`<sup>Required</sup> <a name="data_cache_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```python
data_cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsDataCacheConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled">reset_query_insights_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute">reset_query_plans_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength">reset_query_string_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags">reset_record_application_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress">reset_record_client_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_insights_enabled` <a name="reset_query_insights_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled"></a>

```python
def reset_query_insights_enabled() -> None
```

##### `reset_query_plans_per_minute` <a name="reset_query_plans_per_minute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```python
def reset_query_plans_per_minute() -> None
```

##### `reset_query_string_length` <a name="reset_query_string_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength"></a>

```python
def reset_query_string_length() -> None
```

##### `reset_record_application_tags` <a name="reset_record_application_tags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```python
def reset_record_application_tags() -> None
```

##### `reset_record_client_address` <a name="reset_record_client_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress"></a>

```python
def reset_record_client_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput">query_insights_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput">query_plans_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput">query_string_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput">record_application_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput">record_client_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">query_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_insights_enabled_input`<sup>Optional</sup> <a name="query_insights_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput"></a>

```python
query_insights_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute_input`<sup>Optional</sup> <a name="query_plans_per_minute_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```python
query_plans_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length_input`<sup>Optional</sup> <a name="query_string_length_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```python
query_string_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags_input`<sup>Optional</sup> <a name="record_application_tags_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```python
record_application_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address_input`<sup>Optional</sup> <a name="record_client_address_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```python
record_client_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_insights_enabled`<sup>Required</sup> <a name="query_insights_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```python
query_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length`<sup>Required</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address`<sup>Required</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput">expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput"></a>

```python
expiration_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks">put_authorized_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig">put_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange">reset_allocated_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks">reset_authorized_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices">reset_enable_private_path_for_google_cloud_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled">reset_ipv4_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork">reset_private_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig">reset_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode">reset_server_ca_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaPool">reset_server_ca_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorized_networks` <a name="put_authorized_networks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks"></a>

```python
def put_authorized_networks(
  value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]

---

##### `put_psc_config` <a name="put_psc_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig"></a>

```python
def put_psc_config(
  value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]

---

##### `reset_allocated_ip_range` <a name="reset_allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange"></a>

```python
def reset_allocated_ip_range() -> None
```

##### `reset_authorized_networks` <a name="reset_authorized_networks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks"></a>

```python
def reset_authorized_networks() -> None
```

##### `reset_enable_private_path_for_google_cloud_services` <a name="reset_enable_private_path_for_google_cloud_services" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices"></a>

```python
def reset_enable_private_path_for_google_cloud_services() -> None
```

##### `reset_ipv4_enabled` <a name="reset_ipv4_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled"></a>

```python
def reset_ipv4_enabled() -> None
```

##### `reset_private_network` <a name="reset_private_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork"></a>

```python
def reset_private_network() -> None
```

##### `reset_psc_config` <a name="reset_psc_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig"></a>

```python
def reset_psc_config() -> None
```

##### `reset_server_ca_mode` <a name="reset_server_ca_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode"></a>

```python
def reset_server_ca_mode() -> None
```

##### `reset_server_ca_pool` <a name="reset_server_ca_pool" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaPool"></a>

```python
def reset_server_ca_pool() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorized_networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput">allocated_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput">authorized_networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput">enable_private_path_for_google_cloud_services_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput">ipv4_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput">private_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput">psc_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput">server_ca_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPoolInput">server_ca_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocated_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enable_private_path_for_google_cloud_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">private_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode">server_ca_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool">server_ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_networks`<sup>Required</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```python
authorized_networks: GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```python
psc_config: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `allocated_ip_range_input`<sup>Optional</sup> <a name="allocated_ip_range_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput"></a>

```python
allocated_ip_range_input: str
```

- *Type:* str

---

##### `authorized_networks_input`<sup>Optional</sup> <a name="authorized_networks_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput"></a>

```python
authorized_networks_input: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]

---

##### `enable_private_path_for_google_cloud_services_input`<sup>Optional</sup> <a name="enable_private_path_for_google_cloud_services_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput"></a>

```python
enable_private_path_for_google_cloud_services_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_enabled_input`<sup>Optional</sup> <a name="ipv4_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput"></a>

```python
ipv4_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_network_input`<sup>Optional</sup> <a name="private_network_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput"></a>

```python
private_network_input: str
```

- *Type:* str

---

##### `psc_config_input`<sup>Optional</sup> <a name="psc_config_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput"></a>

```python
psc_config_input: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]

---

##### `server_ca_mode_input`<sup>Optional</sup> <a name="server_ca_mode_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput"></a>

```python
server_ca_mode_input: str
```

- *Type:* str

---

##### `server_ca_pool_input`<sup>Optional</sup> <a name="server_ca_pool_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPoolInput"></a>

```python
server_ca_pool_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `allocated_ip_range`<sup>Required</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```python
allocated_ip_range: str
```

- *Type:* str

---

##### `enable_private_path_for_google_cloud_services`<sup>Required</sup> <a name="enable_private_path_for_google_cloud_services" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```python
enable_private_path_for_google_cloud_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_enabled`<sup>Required</sup> <a name="ipv4_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```python
ipv4_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_network`<sup>Required</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```python
private_network: str
```

- *Type:* str

---

##### `server_ca_mode`<sup>Required</sup> <a name="server_ca_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode"></a>

```python
server_ca_mode: str
```

- *Type:* str

---

##### `server_ca_pool`<sup>Required</sup> <a name="server_ca_pool" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaPool"></a>

```python
server_ca_pool: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections">put_psc_auto_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects">reset_allowed_consumer_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscAutoConnections">reset_psc_auto_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled">reset_psc_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_psc_auto_connections` <a name="put_psc_auto_connections" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections"></a>

```python
def put_psc_auto_connections(
  value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.putPscAutoConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]

---

##### `reset_allowed_consumer_projects` <a name="reset_allowed_consumer_projects" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects"></a>

```python
def reset_allowed_consumer_projects() -> None
```

##### `reset_psc_auto_connections` <a name="reset_psc_auto_connections" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscAutoConnections"></a>

```python
def reset_psc_auto_connections() -> None
```

##### `reset_psc_enabled` <a name="reset_psc_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled"></a>

```python
def reset_psc_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections">psc_auto_connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput">allowed_consumer_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnectionsInput">psc_auto_connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput">psc_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">psc_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_auto_connections`<sup>Required</sup> <a name="psc_auto_connections" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnections"></a>

```python
psc_auto_connections: GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList</a>

---

##### `allowed_consumer_projects_input`<sup>Optional</sup> <a name="allowed_consumer_projects_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```python
allowed_consumer_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psc_auto_connections_input`<sup>Optional</sup> <a name="psc_auto_connections_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscAutoConnectionsInput"></a>

```python
psc_auto_connections_input: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]

---

##### `psc_enabled_input`<sup>Optional</sup> <a name="psc_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput"></a>

```python
psc_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_consumer_projects`<sup>Required</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psc_enabled`<sup>Required</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```python
psc_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]]

---


### GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference <a name="GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resetConsumerServiceProjectId">reset_consumer_service_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_consumer_service_project_id` <a name="reset_consumer_service_project_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.resetConsumerServiceProjectId"></a>

```python
def reset_consumer_service_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput">consumer_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectIdInput">consumer_service_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId">consumer_service_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network_input`<sup>Optional</sup> <a name="consumer_network_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput"></a>

```python
consumer_network_input: str
```

- *Type:* str

---

##### `consumer_service_project_id_input`<sup>Optional</sup> <a name="consumer_service_project_id_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectIdInput"></a>

```python
consumer_service_project_id_input: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `consumer_service_project_id`<sup>Required</sup> <a name="consumer_service_project_id" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.consumerServiceProjectId"></a>

```python
consumer_service_project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfigPscAutoConnections</a>]

---


### GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication">reset_follow_gae_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone">reset_secondary_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_follow_gae_application` <a name="reset_follow_gae_application" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication"></a>

```python
def reset_follow_gae_application() -> None
```

##### `reset_secondary_zone` <a name="reset_secondary_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone"></a>

```python
def reset_secondary_zone() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput">follow_gae_application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput">secondary_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">follow_gae_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">secondary_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `follow_gae_application_input`<sup>Optional</sup> <a name="follow_gae_application_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput"></a>

```python
follow_gae_application_input: str
```

- *Type:* str

---

##### `secondary_zone_input`<sup>Optional</sup> <a name="secondary_zone_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput"></a>

```python
secondary_zone_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `follow_gae_application`<sup>Required</sup> <a name="follow_gae_application" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```python
follow_gae_application: str
```

- *Type:* str

---

##### `secondary_zone`<sup>Required</sup> <a name="secondary_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```python
secondary_zone: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a>

---


### GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack">reset_update_track</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_update_track` <a name="reset_update_track" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack"></a>

```python
def reset_update_track() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput">update_track_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">update_track</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_track_input`<sup>Optional</sup> <a name="update_track_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput"></a>

```python
update_track_input: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_track`<sup>Required</sup> <a name="update_track" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```python
update_track: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### GoogleSqlDatabaseInstanceSettingsOutputReference <a name="GoogleSqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig">put_active_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures">put_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration">put_backup_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags">put_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig">put_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod">put_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig">put_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putLocationPreference">put_location_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy">put_password_validation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig">put_sql_server_audit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy">reset_activation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig">reset_active_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures">reset_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType">reset_availability_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration">reset_backup_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetCollation">reset_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement">reset_connector_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags">reset_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig">reset_data_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled">reset_deletion_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod">reset_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize">reset_disk_autoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit">reset_disk_autoresize_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskSize">reset_disk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration">reset_enable_dataplex_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration">reset_enable_google_ml_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig">reset_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration">reset_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetLocationPreference">reset_location_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy">reset_password_validation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetPricingPlan">reset_pricing_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig">reset_sql_server_audit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetUserLabels">reset_user_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory_config` <a name="put_active_directory_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig"></a>

```python
def put_active_directory_config(
  domain: str
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig.parameter.domain"></a>

- *Type:* str

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#domain GoogleSqlDatabaseInstance#domain}

---

##### `put_advanced_machine_features` <a name="put_advanced_machine_features" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures"></a>

```python
def put_advanced_machine_features(
  threads_per_core: typing.Union[int, float] = None
) -> None
```

###### `threads_per_core`<sup>Optional</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

The number of threads per physical core. Can be 1 or 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#threads_per_core GoogleSqlDatabaseInstance#threads_per_core}

---

##### `put_backup_configuration` <a name="put_backup_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration"></a>

```python
def put_backup_configuration(
  backup_retention_settings: GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings = None,
  binary_log_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  location: str = None,
  point_in_time_recovery_enabled: typing.Union[bool, IResolvable] = None,
  start_time: str = None,
  transaction_log_retention_days: typing.Union[int, float] = None
) -> None
```

###### `backup_retention_settings`<sup>Optional</sup> <a name="backup_retention_settings" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.backupRetentionSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">GoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#backup_retention_settings GoogleSqlDatabaseInstance#backup_retention_settings}

---

###### `binary_log_enabled`<sup>Optional</sup> <a name="binary_log_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.binaryLogEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#binary_log_enabled GoogleSqlDatabaseInstance#binary_log_enabled}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enabled GoogleSqlDatabaseInstance#enabled}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.location"></a>

- *Type:* str

Location of the backup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#location GoogleSqlDatabaseInstance#location}

---

###### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.pointInTimeRecoveryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#point_in_time_recovery_enabled GoogleSqlDatabaseInstance#point_in_time_recovery_enabled}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.startTime"></a>

- *Type:* str

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#start_time GoogleSqlDatabaseInstance#start_time}

---

###### `transaction_log_retention_days`<sup>Optional</sup> <a name="transaction_log_retention_days" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.transactionLogRetentionDays"></a>

- *Type:* typing.Union[int, float]

The number of days of transaction logs we retain for point in time restore, from 1-7.

(For PostgreSQL Enterprise Plus instances, from 1 to 35.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#transaction_log_retention_days GoogleSqlDatabaseInstance#transaction_log_retention_days}

---

##### `put_database_flags` <a name="put_database_flags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags"></a>

```python
def put_database_flags(
  value: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]

---

##### `put_data_cache_config` <a name="put_data_cache_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig"></a>

```python
def put_data_cache_config(
  data_cache_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `data_cache_enabled`<sup>Optional</sup> <a name="data_cache_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig.parameter.dataCacheEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether data cache is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#data_cache_enabled GoogleSqlDatabaseInstance#data_cache_enabled}

---

##### `put_deny_maintenance_period` <a name="put_deny_maintenance_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod"></a>

```python
def put_deny_maintenance_period(
  end_date: str,
  start_date: str,
  time: str
) -> None
```

###### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.endDate"></a>

- *Type:* str

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#end_date GoogleSqlDatabaseInstance#end_date}

---

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.startDate"></a>

- *Type:* str

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#start_date GoogleSqlDatabaseInstance#start_date}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.time"></a>

- *Type:* str

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#time GoogleSqlDatabaseInstance#time}

---

##### `put_insights_config` <a name="put_insights_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig"></a>

```python
def put_insights_config(
  query_insights_enabled: typing.Union[bool, IResolvable] = None,
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
) -> None
```

###### `query_insights_enabled`<sup>Optional</sup> <a name="query_insights_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.queryInsightsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_insights_enabled GoogleSqlDatabaseInstance#query_insights_enabled}

---

###### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.queryPlansPerMinute"></a>

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_plans_per_minute GoogleSqlDatabaseInstance#query_plans_per_minute}

---

###### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.queryStringLength"></a>

- *Type:* typing.Union[int, float]

Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#query_string_length GoogleSqlDatabaseInstance#query_string_length}

---

###### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.recordApplicationTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#record_application_tags GoogleSqlDatabaseInstance#record_application_tags}

---

###### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.recordClientAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#record_client_address GoogleSqlDatabaseInstance#record_client_address}

---

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration"></a>

```python
def put_ip_configuration(
  allocated_ip_range: str = None,
  authorized_networks: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks]] = None,
  enable_private_path_for_google_cloud_services: typing.Union[bool, IResolvable] = None,
  ipv4_enabled: typing.Union[bool, IResolvable] = None,
  private_network: str = None,
  psc_config: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig]] = None,
  server_ca_mode: str = None,
  server_ca_pool: str = None,
  ssl_mode: str = None
) -> None
```

###### `allocated_ip_range`<sup>Optional</sup> <a name="allocated_ip_range" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.allocatedIpRange"></a>

- *Type:* str

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#allocated_ip_range GoogleSqlDatabaseInstance#allocated_ip_range}

---

###### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.authorizedNetworks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">GoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>]]

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#authorized_networks GoogleSqlDatabaseInstance#authorized_networks}

---

###### `enable_private_path_for_google_cloud_services`<sup>Optional</sup> <a name="enable_private_path_for_google_cloud_services" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.enablePrivatePathForGoogleCloudServices"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_private_path_for_google_cloud_services GoogleSqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

###### `ipv4_enabled`<sup>Optional</sup> <a name="ipv4_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.ipv4Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ipv4_enabled GoogleSqlDatabaseInstance#ipv4_enabled}

---

###### `private_network`<sup>Optional</sup> <a name="private_network" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.privateNetwork"></a>

- *Type:* str

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#private_network GoogleSqlDatabaseInstance#private_network}

---

###### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.pscConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig">GoogleSqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>]]

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#psc_config GoogleSqlDatabaseInstance#psc_config}

---

###### `server_ca_mode`<sup>Optional</sup> <a name="server_ca_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.serverCaMode"></a>

- *Type:* str

Specify how the server certificate's Certificate Authority is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#server_ca_mode GoogleSqlDatabaseInstance#server_ca_mode}

---

###### `server_ca_pool`<sup>Optional</sup> <a name="server_ca_pool" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.serverCaPool"></a>

- *Type:* str

The resource name of the server CA pool for an instance with "CUSTOMER_MANAGED_CAS_CA" as the "server_ca_mode".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#server_ca_pool GoogleSqlDatabaseInstance#server_ca_pool}

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.sslMode"></a>

- *Type:* str

Specify how SSL connection should be enforced in DB connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#ssl_mode GoogleSqlDatabaseInstance#ssl_mode}

---

##### `put_location_preference` <a name="put_location_preference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putLocationPreference"></a>

```python
def put_location_preference(
  follow_gae_application: str = None,
  secondary_zone: str = None,
  zone: str = None
) -> None
```

###### `follow_gae_application`<sup>Optional</sup> <a name="follow_gae_application" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.followGaeApplication"></a>

- *Type:* str

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#follow_gae_application GoogleSqlDatabaseInstance#follow_gae_application}

---

###### `secondary_zone`<sup>Optional</sup> <a name="secondary_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.secondaryZone"></a>

- *Type:* str

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#secondary_zone GoogleSqlDatabaseInstance#secondary_zone}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.zone"></a>

- *Type:* str

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#zone GoogleSqlDatabaseInstance#zone}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day: typing.Union[int, float] = None,
  hour: typing.Union[int, float] = None,
  update_track: str = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#day GoogleSqlDatabaseInstance#day}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#hour GoogleSqlDatabaseInstance#hour}

---

###### `update_track`<sup>Optional</sup> <a name="update_track" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.updateTrack"></a>

- *Type:* str

Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#update_track GoogleSqlDatabaseInstance#update_track}

---

##### `put_password_validation_policy` <a name="put_password_validation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy"></a>

```python
def put_password_validation_policy(
  enable_password_policy: typing.Union[bool, IResolvable],
  complexity: str = None,
  disallow_username_substring: typing.Union[bool, IResolvable] = None,
  min_length: typing.Union[int, float] = None,
  password_change_interval: str = None,
  reuse_interval: typing.Union[int, float] = None
) -> None
```

###### `enable_password_policy`<sup>Required</sup> <a name="enable_password_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.enablePasswordPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#enable_password_policy GoogleSqlDatabaseInstance#enable_password_policy}

---

###### `complexity`<sup>Optional</sup> <a name="complexity" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.complexity"></a>

- *Type:* str

Password complexity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#complexity GoogleSqlDatabaseInstance#complexity}

---

###### `disallow_username_substring`<sup>Optional</sup> <a name="disallow_username_substring" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.disallowUsernameSubstring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#disallow_username_substring GoogleSqlDatabaseInstance#disallow_username_substring}

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#min_length GoogleSqlDatabaseInstance#min_length}

---

###### `password_change_interval`<sup>Optional</sup> <a name="password_change_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.passwordChangeInterval"></a>

- *Type:* str

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#password_change_interval GoogleSqlDatabaseInstance#password_change_interval}

---

###### `reuse_interval`<sup>Optional</sup> <a name="reuse_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.reuseInterval"></a>

- *Type:* typing.Union[int, float]

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#reuse_interval GoogleSqlDatabaseInstance#reuse_interval}

---

##### `put_sql_server_audit_config` <a name="put_sql_server_audit_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig"></a>

```python
def put_sql_server_audit_config(
  bucket: str = None,
  retention_interval: str = None,
  upload_interval: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.bucket"></a>

- *Type:* str

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#bucket GoogleSqlDatabaseInstance#bucket}

---

###### `retention_interval`<sup>Optional</sup> <a name="retention_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.retentionInterval"></a>

- *Type:* str

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#retention_interval GoogleSqlDatabaseInstance#retention_interval}

---

###### `upload_interval`<sup>Optional</sup> <a name="upload_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.uploadInterval"></a>

- *Type:* str

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_sql_database_instance#upload_interval GoogleSqlDatabaseInstance#upload_interval}

---

##### `reset_activation_policy` <a name="reset_activation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy"></a>

```python
def reset_activation_policy() -> None
```

##### `reset_active_directory_config` <a name="reset_active_directory_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig"></a>

```python
def reset_active_directory_config() -> None
```

##### `reset_advanced_machine_features` <a name="reset_advanced_machine_features" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures"></a>

```python
def reset_advanced_machine_features() -> None
```

##### `reset_availability_type` <a name="reset_availability_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType"></a>

```python
def reset_availability_type() -> None
```

##### `reset_backup_configuration` <a name="reset_backup_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration"></a>

```python
def reset_backup_configuration() -> None
```

##### `reset_collation` <a name="reset_collation" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetCollation"></a>

```python
def reset_collation() -> None
```

##### `reset_connector_enforcement` <a name="reset_connector_enforcement" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement"></a>

```python
def reset_connector_enforcement() -> None
```

##### `reset_database_flags` <a name="reset_database_flags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```python
def reset_database_flags() -> None
```

##### `reset_data_cache_config` <a name="reset_data_cache_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig"></a>

```python
def reset_data_cache_config() -> None
```

##### `reset_deletion_protection_enabled` <a name="reset_deletion_protection_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled"></a>

```python
def reset_deletion_protection_enabled() -> None
```

##### `reset_deny_maintenance_period` <a name="reset_deny_maintenance_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod"></a>

```python
def reset_deny_maintenance_period() -> None
```

##### `reset_disk_autoresize` <a name="reset_disk_autoresize" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize"></a>

```python
def reset_disk_autoresize() -> None
```

##### `reset_disk_autoresize_limit` <a name="reset_disk_autoresize_limit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit"></a>

```python
def reset_disk_autoresize_limit() -> None
```

##### `reset_disk_size` <a name="reset_disk_size" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskSize"></a>

```python
def reset_disk_size() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_enable_dataplex_integration` <a name="reset_enable_dataplex_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration"></a>

```python
def reset_enable_dataplex_integration() -> None
```

##### `reset_enable_google_ml_integration` <a name="reset_enable_google_ml_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration"></a>

```python
def reset_enable_google_ml_integration() -> None
```

##### `reset_insights_config` <a name="reset_insights_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig"></a>

```python
def reset_insights_config() -> None
```

##### `reset_ip_configuration` <a name="reset_ip_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration"></a>

```python
def reset_ip_configuration() -> None
```

##### `reset_location_preference` <a name="reset_location_preference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetLocationPreference"></a>

```python
def reset_location_preference() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_password_validation_policy` <a name="reset_password_validation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy"></a>

```python
def reset_password_validation_policy() -> None
```

##### `reset_pricing_plan` <a name="reset_pricing_plan" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetPricingPlan"></a>

```python
def reset_pricing_plan() -> None
```

##### `reset_sql_server_audit_config` <a name="reset_sql_server_audit_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig"></a>

```python
def reset_sql_server_audit_config() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">active_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">backup_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference">GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">database_flags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">data_cache_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference">GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">insights_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference">GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference">GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference">location_preference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference">GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">password_validation_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">sql_server_audit_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput">activation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput">active_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput">advanced_machine_features_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput">availability_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput">backup_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.collationInput">collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput">connector_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput">database_flags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput">data_cache_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput">deletion_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput">deny_maintenance_period_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput">disk_autoresize_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput">disk_autoresize_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput">disk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput">enable_dataplex_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput">enable_google_ml_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput">insights_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput">ip_configuration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput">location_preference_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput">password_validation_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput">pricing_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput">sql_server_audit_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">activation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType">availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">connector_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">disk_autoresize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">disk_autoresize_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration">enable_dataplex_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration">enable_google_ml_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">pricing_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_config`<sup>Required</sup> <a name="active_directory_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```python
active_directory_config: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a>

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a>

---

##### `backup_configuration`<sup>Required</sup> <a name="backup_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```python
backup_configuration: GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference">GoogleSqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a>

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```python
database_flags: GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList">GoogleSqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `data_cache_config`<sup>Required</sup> <a name="data_cache_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```python
data_cache_config: GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference">GoogleSqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a>

---

##### `deny_maintenance_period`<sup>Required</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a>

---

##### `insights_config`<sup>Required</sup> <a name="insights_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```python
insights_config: GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference">GoogleSqlDatabaseInstanceSettingsInsightsConfigOutputReference</a>

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference">GoogleSqlDatabaseInstanceSettingsIpConfigurationOutputReference</a>

---

##### `location_preference`<sup>Required</sup> <a name="location_preference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```python
location_preference: GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference">GoogleSqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">GoogleSqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a>

---

##### `password_validation_policy`<sup>Required</sup> <a name="password_validation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```python
password_validation_policy: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a>

---

##### `sql_server_audit_config`<sup>Required</sup> <a name="sql_server_audit_config" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```python
sql_server_audit_config: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `activation_policy_input`<sup>Optional</sup> <a name="activation_policy_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput"></a>

```python
activation_policy_input: str
```

- *Type:* str

---

##### `active_directory_config_input`<sup>Optional</sup> <a name="active_directory_config_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput"></a>

```python
active_directory_config_input: GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig">GoogleSqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `advanced_machine_features_input`<sup>Optional</sup> <a name="advanced_machine_features_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput"></a>

```python
advanced_machine_features_input: GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures">GoogleSqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `availability_type_input`<sup>Optional</sup> <a name="availability_type_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput"></a>

```python
availability_type_input: str
```

- *Type:* str

---

##### `backup_configuration_input`<sup>Optional</sup> <a name="backup_configuration_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput"></a>

```python
backup_configuration_input: GoogleSqlDatabaseInstanceSettingsBackupConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsBackupConfiguration">GoogleSqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `collation_input`<sup>Optional</sup> <a name="collation_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.collationInput"></a>

```python
collation_input: str
```

- *Type:* str

---

##### `connector_enforcement_input`<sup>Optional</sup> <a name="connector_enforcement_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput"></a>

```python
connector_enforcement_input: str
```

- *Type:* str

---

##### `database_flags_input`<sup>Optional</sup> <a name="database_flags_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```python
database_flags_input: typing.Union[IResolvable, typing.List[GoogleSqlDatabaseInstanceSettingsDatabaseFlags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDatabaseFlags">GoogleSqlDatabaseInstanceSettingsDatabaseFlags</a>]]

---

##### `data_cache_config_input`<sup>Optional</sup> <a name="data_cache_config_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput"></a>

```python
data_cache_config_input: GoogleSqlDatabaseInstanceSettingsDataCacheConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDataCacheConfig">GoogleSqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `deletion_protection_enabled_input`<sup>Optional</sup> <a name="deletion_protection_enabled_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput"></a>

```python
deletion_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deny_maintenance_period_input`<sup>Optional</sup> <a name="deny_maintenance_period_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput"></a>

```python
deny_maintenance_period_input: GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod">GoogleSqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `disk_autoresize_input`<sup>Optional</sup> <a name="disk_autoresize_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput"></a>

```python
disk_autoresize_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_autoresize_limit_input`<sup>Optional</sup> <a name="disk_autoresize_limit_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput"></a>

```python
disk_autoresize_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size_input`<sup>Optional</sup> <a name="disk_size_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput"></a>

```python
disk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `enable_dataplex_integration_input`<sup>Optional</sup> <a name="enable_dataplex_integration_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput"></a>

```python
enable_dataplex_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_google_ml_integration_input`<sup>Optional</sup> <a name="enable_google_ml_integration_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput"></a>

```python
enable_google_ml_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insights_config_input`<sup>Optional</sup> <a name="insights_config_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput"></a>

```python
insights_config_input: GoogleSqlDatabaseInstanceSettingsInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsInsightsConfig">GoogleSqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput"></a>

```python
ip_configuration_input: GoogleSqlDatabaseInstanceSettingsIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsIpConfiguration">GoogleSqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `location_preference_input`<sup>Optional</sup> <a name="location_preference_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput"></a>

```python
location_preference_input: GoogleSqlDatabaseInstanceSettingsLocationPreference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsLocationPreference">GoogleSqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: GoogleSqlDatabaseInstanceSettingsMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsMaintenanceWindow">GoogleSqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `password_validation_policy_input`<sup>Optional</sup> <a name="password_validation_policy_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput"></a>

```python
password_validation_policy_input: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `pricing_plan_input`<sup>Optional</sup> <a name="pricing_plan_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput"></a>

```python
pricing_plan_input: str
```

- *Type:* str

---

##### `sql_server_audit_config_input`<sup>Optional</sup> <a name="sql_server_audit_config_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput"></a>

```python
sql_server_audit_config_input: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `activation_policy`<sup>Required</sup> <a name="activation_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

---

##### `availability_type`<sup>Required</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `connector_enforcement`<sup>Required</sup> <a name="connector_enforcement" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```python
connector_enforcement: str
```

- *Type:* str

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_autoresize`<sup>Required</sup> <a name="disk_autoresize" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```python
disk_autoresize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_autoresize_limit`<sup>Required</sup> <a name="disk_autoresize_limit" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```python
disk_autoresize_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size`<sup>Required</sup> <a name="disk_size" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `enable_dataplex_integration`<sup>Required</sup> <a name="enable_dataplex_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration"></a>

```python
enable_dataplex_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_google_ml_integration`<sup>Required</sup> <a name="enable_google_ml_integration" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration"></a>

```python
enable_google_ml_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pricing_plan`<sup>Required</sup> <a name="pricing_plan" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```python
pricing_plan: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettings">GoogleSqlDatabaseInstanceSettings</a>

---


### GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity">reset_complexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring">reset_disallow_username_substring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval">reset_password_change_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval">reset_reuse_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_complexity` <a name="reset_complexity" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity"></a>

```python
def reset_complexity() -> None
```

##### `reset_disallow_username_substring` <a name="reset_disallow_username_substring" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring"></a>

```python
def reset_disallow_username_substring() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_password_change_interval` <a name="reset_password_change_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval"></a>

```python
def reset_password_change_interval() -> None
```

##### `reset_reuse_interval` <a name="reset_reuse_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval"></a>

```python
def reset_reuse_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput">complexity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput">disallow_username_substring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput">enable_password_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput">password_change_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput">reuse_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallow_username_substring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enable_password_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">password_change_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuse_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `complexity_input`<sup>Optional</sup> <a name="complexity_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput"></a>

```python
complexity_input: str
```

- *Type:* str

---

##### `disallow_username_substring_input`<sup>Optional</sup> <a name="disallow_username_substring_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput"></a>

```python
disallow_username_substring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_password_policy_input`<sup>Optional</sup> <a name="enable_password_policy_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput"></a>

```python
enable_password_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_change_interval_input`<sup>Optional</sup> <a name="password_change_interval_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput"></a>

```python
password_change_interval_input: str
```

- *Type:* str

---

##### `reuse_interval_input`<sup>Optional</sup> <a name="reuse_interval_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput"></a>

```python
reuse_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```python
complexity: str
```

- *Type:* str

---

##### `disallow_username_substring`<sup>Required</sup> <a name="disallow_username_substring" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```python
disallow_username_substring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_password_policy`<sup>Required</sup> <a name="enable_password_policy" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```python
enable_password_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_change_interval`<sup>Required</sup> <a name="password_change_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```python
password_change_interval: str
```

- *Type:* str

---

##### `reuse_interval`<sup>Required</sup> <a name="reuse_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```python
reuse_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy">GoogleSqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval">reset_retention_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval">reset_upload_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_retention_interval` <a name="reset_retention_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval"></a>

```python
def reset_retention_interval() -> None
```

##### `reset_upload_interval` <a name="reset_upload_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval"></a>

```python
def reset_upload_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput">retention_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput">upload_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retention_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">upload_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `retention_interval_input`<sup>Optional</sup> <a name="retention_interval_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput"></a>

```python
retention_interval_input: str
```

- *Type:* str

---

##### `upload_interval_input`<sup>Optional</sup> <a name="upload_interval_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput"></a>

```python
upload_interval_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `retention_interval`<sup>Required</sup> <a name="retention_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```python
retention_interval: str
```

- *Type:* str

---

##### `upload_interval`<sup>Required</sup> <a name="upload_interval" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```python
upload_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig">GoogleSqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---


### GoogleSqlDatabaseInstanceTimeoutsOutputReference <a name="GoogleSqlDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_sql_database_instance

googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSqlDatabaseInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSqlDatabaseInstance.GoogleSqlDatabaseInstanceTimeouts">GoogleSqlDatabaseInstanceTimeouts</a>]

---



