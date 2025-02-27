# `googleFirestoreBackupSchedule` Submodule <a name="`googleFirestoreBackupSchedule` Submodule" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreBackupSchedule <a name="GoogleFirestoreBackupSchedule" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule google_firestore_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupSchedule;

GoogleFirestoreBackupSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .retention(java.lang.String)
//  .dailyRecurrence(GoogleFirestoreBackupScheduleDailyRecurrence)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreBackupScheduleTimeouts)
//  .weeklyRecurrence(GoogleFirestoreBackupScheduleWeeklyRecurrence)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.retention">retention</a></code> | <code>java.lang.String</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#id GoogleFirestoreBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#project GoogleFirestoreBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.retention"></a>

- *Type:* java.lang.String

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#retention GoogleFirestoreBackupSchedule#retention}

---

##### `dailyRecurrence`<sup>Optional</sup> <a name="dailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.dailyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#daily_recurrence GoogleFirestoreBackupSchedule#daily_recurrence}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#database GoogleFirestoreBackupSchedule#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#id GoogleFirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#project GoogleFirestoreBackupSchedule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#timeouts GoogleFirestoreBackupSchedule#timeouts}

---

##### `weeklyRecurrence`<sup>Optional</sup> <a name="weeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.Initializer.parameter.weeklyRecurrence"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#weekly_recurrence GoogleFirestoreBackupSchedule#weekly_recurrence}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putDailyRecurrence">putDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putWeeklyRecurrence">putWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetDailyRecurrence">resetDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetWeeklyRecurrence">resetWeeklyRecurrence</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDailyRecurrence` <a name="putDailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putDailyRecurrence"></a>

```java
public void putDailyRecurrence(GoogleFirestoreBackupScheduleDailyRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putDailyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirestoreBackupScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a>

---

##### `putWeeklyRecurrence` <a name="putWeeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putWeeklyRecurrence"></a>

```java
public void putWeeklyRecurrence(GoogleFirestoreBackupScheduleWeeklyRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.putWeeklyRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `resetDailyRecurrence` <a name="resetDailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetDailyRecurrence"></a>

```java
public void resetDailyRecurrence()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklyRecurrence` <a name="resetWeeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.resetWeeklyRecurrence"></a>

```java
public void resetWeeklyRecurrence()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupSchedule;

GoogleFirestoreBackupSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupSchedule;

GoogleFirestoreBackupSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupSchedule;

GoogleFirestoreBackupSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupSchedule;

GoogleFirestoreBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirestoreBackupSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirestoreBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirestoreBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirestoreBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference">GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference">GoogleFirestoreBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference">GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dailyRecurrenceInput">dailyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.retentionInput">retentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.weeklyRecurrenceInput">weeklyRecurrenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.retention">retention</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dailyRecurrence`<sup>Required</sup> <a name="dailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dailyRecurrence"></a>

```java
public GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference getDailyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference">GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.timeouts"></a>

```java
public GoogleFirestoreBackupScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference">GoogleFirestoreBackupScheduleTimeoutsOutputReference</a>

---

##### `weeklyRecurrence`<sup>Required</sup> <a name="weeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.weeklyRecurrence"></a>

```java
public GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference getWeeklyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference">GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference</a>

---

##### `dailyRecurrenceInput`<sup>Optional</sup> <a name="dailyRecurrenceInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.dailyRecurrenceInput"></a>

```java
public GoogleFirestoreBackupScheduleDailyRecurrence getDailyRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.retentionInput"></a>

```java
public java.lang.String getRetentionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a>

---

##### `weeklyRecurrenceInput`<sup>Optional</sup> <a name="weeklyRecurrenceInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.weeklyRecurrenceInput"></a>

```java
public GoogleFirestoreBackupScheduleWeeklyRecurrence getWeeklyRecurrenceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreBackupScheduleConfig <a name="GoogleFirestoreBackupScheduleConfig" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleConfig;

GoogleFirestoreBackupScheduleConfig.builder()
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
    .retention(java.lang.String)
//  .dailyRecurrence(GoogleFirestoreBackupScheduleDailyRecurrence)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreBackupScheduleTimeouts)
//  .weeklyRecurrence(GoogleFirestoreBackupScheduleWeeklyRecurrence)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.retention">retention</a></code> | <code>java.lang.String</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.dailyRecurrence">dailyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a></code> | daily_recurrence block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#id GoogleFirestoreBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#project GoogleFirestoreBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.weeklyRecurrence">weeklyRecurrence</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a></code> | weekly_recurrence block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.retention"></a>

```java
public java.lang.String getRetention();
```

- *Type:* java.lang.String

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

You can set this to a value up to 14 weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#retention GoogleFirestoreBackupSchedule#retention}

---

##### `dailyRecurrence`<sup>Optional</sup> <a name="dailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.dailyRecurrence"></a>

```java
public GoogleFirestoreBackupScheduleDailyRecurrence getDailyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a>

daily_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#daily_recurrence GoogleFirestoreBackupSchedule#daily_recurrence}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#database GoogleFirestoreBackupSchedule#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#id GoogleFirestoreBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#project GoogleFirestoreBackupSchedule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.timeouts"></a>

```java
public GoogleFirestoreBackupScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#timeouts GoogleFirestoreBackupSchedule#timeouts}

---

##### `weeklyRecurrence`<sup>Optional</sup> <a name="weeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleConfig.property.weeklyRecurrence"></a>

```java
public GoogleFirestoreBackupScheduleWeeklyRecurrence getWeeklyRecurrence();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a>

weekly_recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#weekly_recurrence GoogleFirestoreBackupSchedule#weekly_recurrence}

---

### GoogleFirestoreBackupScheduleDailyRecurrence <a name="GoogleFirestoreBackupScheduleDailyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleDailyRecurrence;

GoogleFirestoreBackupScheduleDailyRecurrence.builder()
    .build();
```


### GoogleFirestoreBackupScheduleTimeouts <a name="GoogleFirestoreBackupScheduleTimeouts" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleTimeouts;

GoogleFirestoreBackupScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#create GoogleFirestoreBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#delete GoogleFirestoreBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#update GoogleFirestoreBackupSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#create GoogleFirestoreBackupSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#delete GoogleFirestoreBackupSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#update GoogleFirestoreBackupSchedule#update}.

---

### GoogleFirestoreBackupScheduleWeeklyRecurrence <a name="GoogleFirestoreBackupScheduleWeeklyRecurrence" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleWeeklyRecurrence;

GoogleFirestoreBackupScheduleWeeklyRecurrence.builder()
//  .day(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence.property.day">day</a></code> | <code>java.lang.String</code> | The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_firestore_backup_schedule#day GoogleFirestoreBackupSchedule#day}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference <a name="GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference;

new GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrenceOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreBackupScheduleDailyRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleDailyRecurrence">GoogleFirestoreBackupScheduleDailyRecurrence</a>

---


### GoogleFirestoreBackupScheduleTimeoutsOutputReference <a name="GoogleFirestoreBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference;

new GoogleFirestoreBackupScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleTimeouts">GoogleFirestoreBackupScheduleTimeouts</a>

---


### GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference <a name="GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_backup_schedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference;

new GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay">resetDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.resetDay"></a>

```java
public void resetDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrenceOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreBackupScheduleWeeklyRecurrence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreBackupSchedule.GoogleFirestoreBackupScheduleWeeklyRecurrence">GoogleFirestoreBackupScheduleWeeklyRecurrence</a>

---



