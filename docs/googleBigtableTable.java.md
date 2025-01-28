# `googleBigtableTable` Submodule <a name="`googleBigtableTable` Submodule" id="@cdktf/provider-google-beta.googleBigtableTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableTable <a name="GoogleBigtableTable" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table google_bigtable_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTable;

GoogleBigtableTable.Builder.create(Construct scope, java.lang.String id)
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
    .instanceName(java.lang.String)
    .name(java.lang.String)
//  .automatedBackupPolicy(GoogleBigtableTableAutomatedBackupPolicy)
//  .changeStreamRetention(java.lang.String)
//  .columnFamily(IResolvable)
//  .columnFamily(java.util.List<GoogleBigtableTableColumnFamily>)
//  .deletionProtection(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .splitKeys(java.util.List<java.lang.String>)
//  .timeouts(GoogleBigtableTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.automatedBackupPolicy">automatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.changeStreamRetention">changeStreamRetention</a></code> | <code>java.lang.String</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.columnFamily">columnFamily</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>></code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.splitKeys">splitKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#name GoogleBigtableTable#name}

---

##### `automatedBackupPolicy`<sup>Optional</sup> <a name="automatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.automatedBackupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#automated_backup_policy GoogleBigtableTable#automated_backup_policy}

---

##### `changeStreamRetention`<sup>Optional</sup> <a name="changeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.changeStreamRetention"></a>

- *Type:* java.lang.String

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#change_stream_retention GoogleBigtableTable#change_stream_retention}

---

##### `columnFamily`<sup>Optional</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.columnFamily"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>>

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#column_family GoogleBigtableTable#column_family}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.String

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#deletion_protection GoogleBigtableTable#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#project GoogleBigtableTable#project}

---

##### `splitKeys`<sup>Optional</sup> <a name="splitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.splitKeys"></a>

- *Type:* java.util.List<java.lang.String>

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy">putAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily">putColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy">resetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention">resetChangeStreamRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily">resetColumnFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys">resetSplitKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutomatedBackupPolicy` <a name="putAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy"></a>

```java
public void putAutomatedBackupPolicy(GoogleBigtableTableAutomatedBackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---

##### `putColumnFamily` <a name="putColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily"></a>

```java
public void putColumnFamily(IResolvable OR java.util.List<GoogleBigtableTableColumnFamily> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigtableTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

---

##### `resetAutomatedBackupPolicy` <a name="resetAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy"></a>

```java
public void resetAutomatedBackupPolicy()
```

##### `resetChangeStreamRetention` <a name="resetChangeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention"></a>

```java
public void resetChangeStreamRetention()
```

##### `resetColumnFamily` <a name="resetColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily"></a>

```java
public void resetColumnFamily()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject"></a>

```java
public void resetProject()
```

##### `resetSplitKeys` <a name="resetSplitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys"></a>

```java
public void resetSplitKeys()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTable;

GoogleBigtableTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTable;

GoogleBigtableTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTable;

GoogleBigtableTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTable;

GoogleBigtableTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigtableTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigtableTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigtableTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy">automatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily">columnFamily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput">automatedBackupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput">changeStreamRetentionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput">columnFamilyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput">splitKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention">changeStreamRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys">splitKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automatedBackupPolicy`<sup>Required</sup> <a name="automatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy"></a>

```java
public GoogleBigtableTableAutomatedBackupPolicyOutputReference getAutomatedBackupPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a>

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily"></a>

```java
public GoogleBigtableTableColumnFamilyList getColumnFamily();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts"></a>

```java
public GoogleBigtableTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a>

---

##### `automatedBackupPolicyInput`<sup>Optional</sup> <a name="automatedBackupPolicyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput"></a>

```java
public GoogleBigtableTableAutomatedBackupPolicy getAutomatedBackupPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---

##### `changeStreamRetentionInput`<sup>Optional</sup> <a name="changeStreamRetentionInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput"></a>

```java
public java.lang.String getChangeStreamRetentionInput();
```

- *Type:* java.lang.String

---

##### `columnFamilyInput`<sup>Optional</sup> <a name="columnFamilyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput"></a>

```java
public java.lang.Object getColumnFamilyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput"></a>

```java
public java.lang.String getDeletionProtectionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `splitKeysInput`<sup>Optional</sup> <a name="splitKeysInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput"></a>

```java
public java.util.List<java.lang.String> getSplitKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

---

##### `changeStreamRetention`<sup>Required</sup> <a name="changeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention"></a>

```java
public java.lang.String getChangeStreamRetention();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `splitKeys`<sup>Required</sup> <a name="splitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys"></a>

```java
public java.util.List<java.lang.String> getSplitKeys();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableTableAutomatedBackupPolicy <a name="GoogleBigtableTableAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableAutomatedBackupPolicy;

GoogleBigtableTableAutomatedBackupPolicy.builder()
//  .frequency(java.lang.String)
//  .retentionPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency">frequency</a></code> | <code>java.lang.String</code> | How frequently automated backups should occur. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.String</code> | How long the automated backups should be retained. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

How frequently automated backups should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#frequency GoogleBigtableTable#frequency}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod"></a>

```java
public java.lang.String getRetentionPeriod();
```

- *Type:* java.lang.String

How long the automated backups should be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#retention_period GoogleBigtableTable#retention_period}

---

### GoogleBigtableTableColumnFamily <a name="GoogleBigtableTableColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableColumnFamily;

GoogleBigtableTableColumnFamily.builder()
    .family(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family">family</a></code> | <code>java.lang.String</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type">type</a></code> | <code>java.lang.String</code> | The type of the column family. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#family GoogleBigtableTable#family}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#type GoogleBigtableTable#type}

---

### GoogleBigtableTableConfig <a name="GoogleBigtableTableConfig" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableConfig;

GoogleBigtableTableConfig.builder()
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
    .instanceName(java.lang.String)
    .name(java.lang.String)
//  .automatedBackupPolicy(GoogleBigtableTableAutomatedBackupPolicy)
//  .changeStreamRetention(java.lang.String)
//  .columnFamily(IResolvable)
//  .columnFamily(java.util.List<GoogleBigtableTableColumnFamily>)
//  .deletionProtection(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .splitKeys(java.util.List<java.lang.String>)
//  .timeouts(GoogleBigtableTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy">automatedBackupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention">changeStreamRetention</a></code> | <code>java.lang.String</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily">columnFamily</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>></code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys">splitKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#name GoogleBigtableTable#name}

---

##### `automatedBackupPolicy`<sup>Optional</sup> <a name="automatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy"></a>

```java
public GoogleBigtableTableAutomatedBackupPolicy getAutomatedBackupPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#automated_backup_policy GoogleBigtableTable#automated_backup_policy}

---

##### `changeStreamRetention`<sup>Optional</sup> <a name="changeStreamRetention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention"></a>

```java
public java.lang.String getChangeStreamRetention();
```

- *Type:* java.lang.String

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#change_stream_retention GoogleBigtableTable#change_stream_retention}

---

##### `columnFamily`<sup>Optional</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily"></a>

```java
public java.lang.Object getColumnFamily();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>>

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#column_family GoogleBigtableTable#column_family}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#deletion_protection GoogleBigtableTable#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#project GoogleBigtableTable#project}

---

##### `splitKeys`<sup>Optional</sup> <a name="splitKeys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys"></a>

```java
public java.util.List<java.lang.String> getSplitKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts"></a>

```java
public GoogleBigtableTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}

---

### GoogleBigtableTableTimeouts <a name="GoogleBigtableTableTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableTimeouts;

GoogleBigtableTableTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableTableAutomatedBackupPolicyOutputReference <a name="GoogleBigtableTableAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableAutomatedBackupPolicyOutputReference;

new GoogleBigtableTableAutomatedBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput"></a>

```java
public java.lang.String getRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod"></a>

```java
public java.lang.String getRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```java
public GoogleBigtableTableAutomatedBackupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---


### GoogleBigtableTableColumnFamilyList <a name="GoogleBigtableTableColumnFamilyList" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableColumnFamilyList;

new GoogleBigtableTableColumnFamilyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get"></a>

```java
public GoogleBigtableTableColumnFamilyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>>

---


### GoogleBigtableTableColumnFamilyOutputReference <a name="GoogleBigtableTableColumnFamilyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableColumnFamilyOutputReference;

new GoogleBigtableTableColumnFamilyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>

---


### GoogleBigtableTableTimeoutsOutputReference <a name="GoogleBigtableTableTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_table.GoogleBigtableTableTimeoutsOutputReference;

new GoogleBigtableTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

---



