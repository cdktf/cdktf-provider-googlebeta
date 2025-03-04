# `googleSpannerBackupSchedule` Submodule <a name="`googleSpannerBackupSchedule` Submodule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerBackupSchedule <a name="GoogleSpannerBackupSchedule" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupSchedule;

GoogleSpannerBackupSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .instance(java.lang.String)
    .retentionDuration(java.lang.String)
//  .encryptionConfig(GoogleSpannerBackupScheduleEncryptionConfig)
//  .fullBackupSpec(GoogleSpannerBackupScheduleFullBackupSpec)
//  .id(java.lang.String)
//  .incrementalBackupSpec(GoogleSpannerBackupScheduleIncrementalBackupSpec)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .spec(GoogleSpannerBackupScheduleSpec)
//  .timeouts(GoogleSpannerBackupScheduleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.retentionDuration">retentionDuration</a></code> | <code>java.lang.String</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.fullBackupSpec">fullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec">incrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.retentionDuration"></a>

- *Type:* java.lang.String

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}

---

##### `fullBackupSpec`<sup>Optional</sup> <a name="fullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.fullBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalBackupSpec`<sup>Optional</sup> <a name="incrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.incrementalBackupSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec">putFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec">putIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec">resetFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec">resetIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(GoogleSpannerBackupScheduleEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---

##### `putFullBackupSpec` <a name="putFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec"></a>

```java
public void putFullBackupSpec(GoogleSpannerBackupScheduleFullBackupSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putFullBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `putIncrementalBackupSpec` <a name="putIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec"></a>

```java
public void putIncrementalBackupSpec(GoogleSpannerBackupScheduleIncrementalBackupSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putIncrementalBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec"></a>

```java
public void putSpec(GoogleSpannerBackupScheduleSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSpannerBackupScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetFullBackupSpec` <a name="resetFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetFullBackupSpec"></a>

```java
public void resetFullBackupSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetIncrementalBackupSpec` <a name="resetIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```java
public void resetIncrementalBackupSpec()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetProject"></a>

```java
public void resetProject()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupSchedule;

GoogleSpannerBackupSchedule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupSchedule;

GoogleSpannerBackupSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupSchedule;

GoogleSpannerBackupSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupSchedule;

GoogleSpannerBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSpannerBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSpannerBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec">fullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec">incrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput">fullBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput">incrementalBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput">retentionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration">retentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfig"></a>

```java
public GoogleSpannerBackupScheduleEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference">GoogleSpannerBackupScheduleEncryptionConfigOutputReference</a>

---

##### `fullBackupSpec`<sup>Required</sup> <a name="fullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpec"></a>

```java
public GoogleSpannerBackupScheduleFullBackupSpecOutputReference getFullBackupSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference">GoogleSpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `incrementalBackupSpec`<sup>Required</sup> <a name="incrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpec"></a>

```java
public GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference getIncrementalBackupSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference">GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.spec"></a>

```java
public GoogleSpannerBackupScheduleSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference">GoogleSpannerBackupScheduleSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeouts"></a>

```java
public GoogleSpannerBackupScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference">GoogleSpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.encryptionConfigInput"></a>

```java
public GoogleSpannerBackupScheduleEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---

##### `fullBackupSpecInput`<sup>Optional</sup> <a name="fullBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.fullBackupSpecInput"></a>

```java
public GoogleSpannerBackupScheduleFullBackupSpec getFullBackupSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incrementalBackupSpecInput`<sup>Optional</sup> <a name="incrementalBackupSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```java
public GoogleSpannerBackupScheduleIncrementalBackupSpec getIncrementalBackupSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDurationInput"></a>

```java
public java.lang.String getRetentionDurationInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.specInput"></a>

```java
public GoogleSpannerBackupScheduleSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.retentionDuration"></a>

```java
public java.lang.String getRetentionDuration();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerBackupScheduleConfig <a name="GoogleSpannerBackupScheduleConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleConfig;

GoogleSpannerBackupScheduleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .instance(java.lang.String)
    .retentionDuration(java.lang.String)
//  .encryptionConfig(GoogleSpannerBackupScheduleEncryptionConfig)
//  .fullBackupSpec(GoogleSpannerBackupScheduleFullBackupSpec)
//  .id(java.lang.String)
//  .incrementalBackupSpec(GoogleSpannerBackupScheduleIncrementalBackupSpec)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .spec(GoogleSpannerBackupScheduleSpec)
//  .timeouts(GoogleSpannerBackupScheduleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration">retentionDuration</a></code> | <code>java.lang.String</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec">fullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec">incrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.retentionDuration"></a>

```java
public java.lang.String getRetentionDuration();
```

- *Type:* java.lang.String

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.encryptionConfig"></a>

```java
public GoogleSpannerBackupScheduleEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}

---

##### `fullBackupSpec`<sup>Optional</sup> <a name="fullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```java
public GoogleSpannerBackupScheduleFullBackupSpec getFullBackupSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalBackupSpec`<sup>Optional</sup> <a name="incrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```java
public GoogleSpannerBackupScheduleIncrementalBackupSpec getIncrementalBackupSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.spec"></a>

```java
public GoogleSpannerBackupScheduleSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleConfig.property.timeouts"></a>

```java
public GoogleSpannerBackupScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}

---

### GoogleSpannerBackupScheduleEncryptionConfig <a name="GoogleSpannerBackupScheduleEncryptionConfig" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleEncryptionConfig;

GoogleSpannerBackupScheduleEncryptionConfig.builder()
    .encryptionType(java.lang.String)
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | The encryption type of backups created by the backup schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#encryption_type GoogleSpannerBackupSchedule#encryption_type}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#kms_key_name GoogleSpannerBackupSchedule#kms_key_name}

---

### GoogleSpannerBackupScheduleFullBackupSpec <a name="GoogleSpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleFullBackupSpec;

GoogleSpannerBackupScheduleFullBackupSpec.builder()
    .build();
```


### GoogleSpannerBackupScheduleIncrementalBackupSpec <a name="GoogleSpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleIncrementalBackupSpec;

GoogleSpannerBackupScheduleIncrementalBackupSpec.builder()
    .build();
```


### GoogleSpannerBackupScheduleSpec <a name="GoogleSpannerBackupScheduleSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleSpec;

GoogleSpannerBackupScheduleSpec.builder()
//  .cronSpec(GoogleSpannerBackupScheduleSpecCronSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec">cronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `cronSpec`<sup>Optional</sup> <a name="cronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec.property.cronSpec"></a>

```java
public GoogleSpannerBackupScheduleSpecCronSpec getCronSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}

---

### GoogleSpannerBackupScheduleSpecCronSpec <a name="GoogleSpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleSpecCronSpec;

GoogleSpannerBackupScheduleSpecCronSpec.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text">text</a></code> | <code>java.lang.String</code> | Textual representation of the crontab. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}

---

### GoogleSpannerBackupScheduleTimeouts <a name="GoogleSpannerBackupScheduleTimeouts" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleTimeouts;

GoogleSpannerBackupScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerBackupScheduleEncryptionConfigOutputReference <a name="GoogleSpannerBackupScheduleEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference;

new GoogleSpannerBackupScheduleEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue"></a>

```java
public GoogleSpannerBackupScheduleEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleEncryptionConfig">GoogleSpannerBackupScheduleEncryptionConfig</a>

---


### GoogleSpannerBackupScheduleFullBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference;

new GoogleSpannerBackupScheduleFullBackupSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```java
public GoogleSpannerBackupScheduleFullBackupSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleFullBackupSpec">GoogleSpannerBackupScheduleFullBackupSpec</a>

---


### GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference;

new GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```java
public GoogleSpannerBackupScheduleIncrementalBackupSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleIncrementalBackupSpec">GoogleSpannerBackupScheduleIncrementalBackupSpec</a>

---


### GoogleSpannerBackupScheduleSpecCronSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference;

new GoogleSpannerBackupScheduleSpecCronSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```java
public GoogleSpannerBackupScheduleSpecCronSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---


### GoogleSpannerBackupScheduleSpecOutputReference <a name="GoogleSpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleSpecOutputReference;

new GoogleSpannerBackupScheduleSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec">putCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec">resetCronSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCronSpec` <a name="putCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```java
public void putCronSpec(GoogleSpannerBackupScheduleSpecCronSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `resetCronSpec` <a name="resetCronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```java
public void resetCronSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec">cronSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput">cronSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronSpec`<sup>Required</sup> <a name="cronSpec" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```java
public GoogleSpannerBackupScheduleSpecCronSpecOutputReference getCronSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpecOutputReference">GoogleSpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `cronSpecInput`<sup>Optional</sup> <a name="cronSpecInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```java
public GoogleSpannerBackupScheduleSpecCronSpec getCronSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecCronSpec">GoogleSpannerBackupScheduleSpecCronSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```java
public GoogleSpannerBackupScheduleSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleSpec">GoogleSpannerBackupScheduleSpec</a>

---


### GoogleSpannerBackupScheduleTimeoutsOutputReference <a name="GoogleSpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_backup_schedule.GoogleSpannerBackupScheduleTimeoutsOutputReference;

new GoogleSpannerBackupScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerBackupSchedule.GoogleSpannerBackupScheduleTimeouts">GoogleSpannerBackupScheduleTimeouts</a>

---



