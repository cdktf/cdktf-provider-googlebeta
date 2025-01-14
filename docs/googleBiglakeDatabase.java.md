# `googleBiglakeDatabase` Submodule <a name="`googleBiglakeDatabase` Submodule" id="@cdktf/provider-google-beta.googleBiglakeDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeDatabase <a name="GoogleBiglakeDatabase" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database google_biglake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabase;

GoogleBiglakeDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .catalog(java.lang.String)
    .hiveOptions(GoogleBiglakeDatabaseHiveOptions)
    .name(java.lang.String)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleBiglakeDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | The parent catalog. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the database. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The database type. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#id GoogleBiglakeDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

The parent catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#catalog GoogleBiglakeDatabase#catalog}

---

##### `hiveOptions`<sup>Required</sup> <a name="hiveOptions" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.hiveOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#hive_options GoogleBiglakeDatabase#hive_options}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#name GoogleBiglakeDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The database type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#type GoogleBiglakeDatabase#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#id GoogleBiglakeDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#timeouts GoogleBiglakeDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putHiveOptions">putHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHiveOptions` <a name="putHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putHiveOptions"></a>

```java
public void putHiveOptions(GoogleBiglakeDatabaseHiveOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putHiveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putTimeouts"></a>

```java
public void putTimeouts(GoogleBiglakeDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBiglakeDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabase;

GoogleBiglakeDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabase;

GoogleBiglakeDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabase;

GoogleBiglakeDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabase;

GoogleBiglakeDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBiglakeDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBiglakeDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBiglakeDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBiglakeDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference">GoogleBiglakeDatabaseHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference">GoogleBiglakeDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.hiveOptionsInput">hiveOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `hiveOptions`<sup>Required</sup> <a name="hiveOptions" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.hiveOptions"></a>

```java
public GoogleBiglakeDatabaseHiveOptionsOutputReference getHiveOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference">GoogleBiglakeDatabaseHiveOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.timeouts"></a>

```java
public GoogleBiglakeDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference">GoogleBiglakeDatabaseTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `hiveOptionsInput`<sup>Optional</sup> <a name="hiveOptionsInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.hiveOptionsInput"></a>

```java
public GoogleBiglakeDatabaseHiveOptions getHiveOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeDatabaseConfig <a name="GoogleBiglakeDatabaseConfig" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabaseConfig;

GoogleBiglakeDatabaseConfig.builder()
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
    .catalog(java.lang.String)
    .hiveOptions(GoogleBiglakeDatabaseHiveOptions)
    .name(java.lang.String)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleBiglakeDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | The parent catalog. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the database. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.type">type</a></code> | <code>java.lang.String</code> | The database type. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#id GoogleBiglakeDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

The parent catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#catalog GoogleBiglakeDatabase#catalog}

---

##### `hiveOptions`<sup>Required</sup> <a name="hiveOptions" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.hiveOptions"></a>

```java
public GoogleBiglakeDatabaseHiveOptions getHiveOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#hive_options GoogleBiglakeDatabase#hive_options}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#name GoogleBiglakeDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The database type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#type GoogleBiglakeDatabase#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#id GoogleBiglakeDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseConfig.property.timeouts"></a>

```java
public GoogleBiglakeDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#timeouts GoogleBiglakeDatabase#timeouts}

---

### GoogleBiglakeDatabaseHiveOptions <a name="GoogleBiglakeDatabaseHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabaseHiveOptions;

GoogleBiglakeDatabaseHiveOptions.builder()
//  .locationUri(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | Cloud Storage folder URI where the database data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Stores user supplied Hive database parameters. |

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

Cloud Storage folder URI where the database data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#location_uri GoogleBiglakeDatabase#location_uri}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Stores user supplied Hive database parameters.

An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#parameters GoogleBiglakeDatabase#parameters}

---

### GoogleBiglakeDatabaseTimeouts <a name="GoogleBiglakeDatabaseTimeouts" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabaseTimeouts;

GoogleBiglakeDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#create GoogleBiglakeDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#delete GoogleBiglakeDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#update GoogleBiglakeDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#create GoogleBiglakeDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#delete GoogleBiglakeDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_biglake_database#update GoogleBiglakeDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeDatabaseHiveOptionsOutputReference <a name="GoogleBiglakeDatabaseHiveOptionsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabaseHiveOptionsOutputReference;

new GoogleBiglakeDatabaseHiveOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resetLocationUri"></a>

```java
public void resetLocationUri()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.locationUriInput"></a>

```java
public java.lang.String getLocationUriInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptionsOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeDatabaseHiveOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseHiveOptions">GoogleBiglakeDatabaseHiveOptions</a>

---


### GoogleBiglakeDatabaseTimeoutsOutputReference <a name="GoogleBiglakeDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_biglake_database.GoogleBiglakeDatabaseTimeoutsOutputReference;

new GoogleBiglakeDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBiglakeDatabase.GoogleBiglakeDatabaseTimeouts">GoogleBiglakeDatabaseTimeouts</a>

---



