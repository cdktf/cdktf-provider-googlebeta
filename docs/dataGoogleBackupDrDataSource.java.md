# `dataGoogleBackupDrDataSource` Submodule <a name="`dataGoogleBackupDrDataSource` Submodule" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSource <a name="DataGoogleBackupDrDataSource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source google_backup_dr_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSource;

DataGoogleBackupDrDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .backupVaultId(java.lang.String)
    .dataSourceId(java.lang.String)
    .location(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#location DataGoogleBackupDrDataSource#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#project DataGoogleBackupDrDataSource#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#id DataGoogleBackupDrDataSource#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.backupVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#location DataGoogleBackupDrDataSource#location}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#project DataGoogleBackupDrDataSource#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#id DataGoogleBackupDrDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSource;

DataGoogleBackupDrDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSource;

DataGoogleBackupDrDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSource;

DataGoogleBackupDrDataSource.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSource;

DataGoogleBackupDrDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleBackupDrDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleBackupDrDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleBackupDrDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo">backupConfigInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount">backupCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState">configState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication">dataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource">dataSourceGcpResource</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes">totalStoredBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backupConfigInfo`<sup>Required</sup> <a name="backupConfigInfo" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoList getBackupConfigInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a>

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount"></a>

```java
public java.lang.String getBackupCount();
```

- *Type:* java.lang.String

---

##### `configState`<sup>Required</sup> <a name="configState" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState"></a>

```java
public java.lang.String getConfigState();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataSourceBackupApplianceApplication`<sup>Required</sup> <a name="dataSourceBackupApplianceApplication" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList getDataSourceBackupApplianceApplication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a>

---

##### `dataSourceGcpResource`<sup>Required</sup> <a name="dataSourceGcpResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResourceList getDataSourceGcpResource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes"></a>

```java
public java.lang.String getTotalStoredBytes();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput"></a>

```java
public java.lang.String getBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfo <a name="DataGoogleBackupDrDataSourceBackupConfigInfo" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfo;

DataGoogleBackupDrDataSourceBackupConfigInfo.builder()
    .build();
```


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig;

DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig.builder()
    .build();
```


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig;

DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig.builder()
    .build();
```


### DataGoogleBackupDrDataSourceConfig <a name="DataGoogleBackupDrDataSourceConfig" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceConfig;

DataGoogleBackupDrDataSourceConfig.builder()
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
    .backupVaultId(java.lang.String)
    .dataSourceId(java.lang.String)
    .location(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId">backupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#location DataGoogleBackupDrDataSource#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#project DataGoogleBackupDrDataSource#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#id DataGoogleBackupDrDataSource#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId"></a>

```java
public java.lang.String getBackupVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#location DataGoogleBackupDrDataSource#location}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#project DataGoogleBackupDrDataSource#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_backup_dr_data_source#id DataGoogleBackupDrDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication;

DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication.builder()
    .build();
```


### DataGoogleBackupDrDataSourceDataSourceGcpResource <a name="DataGoogleBackupDrDataSourceDataSourceGcpResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResource;

DataGoogleBackupDrDataSourceDataSourceGcpResource.builder()
    .build();
```


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties;

DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList;

new DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference;

new DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">backupApplianceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">backupApplianceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">slaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">slpName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">sltName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `backupApplianceId`<sup>Required</sup> <a name="backupApplianceId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```java
public java.lang.String getBackupApplianceId();
```

- *Type:* java.lang.String

---

##### `backupApplianceName`<sup>Required</sup> <a name="backupApplianceName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```java
public java.lang.String getBackupApplianceName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `slaId`<sup>Required</sup> <a name="slaId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```java
public java.lang.String getSlaId();
```

- *Type:* java.lang.String

---

##### `slpName`<sup>Required</sup> <a name="slpName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```java
public java.lang.String getSlpName();
```

- *Type:* java.lang.String

---

##### `sltName`<sup>Required</sup> <a name="sltName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```java
public java.lang.String getSltName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList;

new DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference;

new DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">backupPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">backupPlanAssociation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">backupPlanDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">backupPlanRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```java
public java.lang.String getBackupPlan();
```

- *Type:* java.lang.String

---

##### `backupPlanAssociation`<sup>Required</sup> <a name="backupPlanAssociation" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```java
public java.lang.String getBackupPlanAssociation();
```

- *Type:* java.lang.String

---

##### `backupPlanDescription`<sup>Required</sup> <a name="backupPlanDescription" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```java
public java.lang.String getBackupPlanDescription();
```

- *Type:* java.lang.String

---

##### `backupPlanRules`<sup>Required</sup> <a name="backupPlanRules" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```java
public java.util.List<java.lang.String> getBackupPlanRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoList;

new DataGoogleBackupDrDataSourceBackupConfigInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference;

new DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">backupApplianceBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig">gcpBackupConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupApplianceBackupConfig`<sup>Required</sup> <a name="backupApplianceBackupConfig" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList getBackupApplianceBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `gcpBackupConfig`<sup>Required</sup> <a name="gcpBackupConfig" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList getGcpBackupConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a>

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError"></a>

```java
public StringMap getLastBackupError();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState"></a>

```java
public java.lang.String getLastBackupState();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```java
public java.lang.String getLastSuccessfulBackupConsistencyTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceBackupConfigInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList;

new DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference;

new DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId">applianceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">backupAppliance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applianceId`<sup>Required</sup> <a name="applianceId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```java
public java.lang.String getApplianceId();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `backupAppliance`<sup>Required</sup> <a name="backupAppliance" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```java
public java.lang.String getBackupAppliance();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList;

new DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference;

new DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">totalDiskCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">totalDiskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `totalDiskCount`<sup>Required</sup> <a name="totalDiskCount" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```java
public java.lang.String getTotalDiskCount();
```

- *Type:* java.lang.String

---

##### `totalDiskSizeGb`<sup>Required</sup> <a name="totalDiskSizeGb" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```java
public java.lang.String getTotalDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceList" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResourceList;

new DataGoogleBackupDrDataSourceDataSourceGcpResourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_backup_dr_data_source.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference;

new DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">computeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename">gcpResourcename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeInstanceDataSourceProperties`<sup>Required</sup> <a name="computeInstanceDataSourceProperties" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList getComputeInstanceDataSourceProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `gcpResourcename`<sup>Required</sup> <a name="gcpResourcename" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```java
public java.lang.String getGcpResourcename();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue"></a>

```java
public DataGoogleBackupDrDataSourceDataSourceGcpResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a>

---



