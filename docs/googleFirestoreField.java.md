# `googleFirestoreField` Submodule <a name="`googleFirestoreField` Submodule" id="@cdktf/provider-google-beta.googleFirestoreField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreField <a name="GoogleFirestoreField" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field google_firestore_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreField;

GoogleFirestoreField.Builder.create(Construct scope, java.lang.String id)
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
    .collection(java.lang.String)
    .field(java.lang.String)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .indexConfig(GoogleFirestoreFieldIndexConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreFieldTimeouts)
//  .ttlConfig(GoogleFirestoreFieldTtlConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.collection">collection</a></code> | <code>java.lang.String</code> | The id of the collection group to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.field">field</a></code> | <code>java.lang.String</code> | The id of the field to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.indexConfig">indexConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.ttlConfig">ttlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.collection"></a>

- *Type:* java.lang.String

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#collection GoogleFirestoreField#collection}

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.field"></a>

- *Type:* java.lang.String

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#field GoogleFirestoreField#field}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#database GoogleFirestoreField#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfig`<sup>Optional</sup> <a name="indexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.indexConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#index_config GoogleFirestoreField#index_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#timeouts GoogleFirestoreField#timeouts}

---

##### `ttlConfig`<sup>Optional</sup> <a name="ttlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.ttlConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#ttl_config GoogleFirestoreField#ttl_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig">putIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig">putTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig">resetIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig">resetTtlConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIndexConfig` <a name="putIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig"></a>

```java
public void putIndexConfig(GoogleFirestoreFieldIndexConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirestoreFieldTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---

##### `putTtlConfig` <a name="putTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig"></a>

```java
public void putTtlConfig(GoogleFirestoreFieldTtlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId"></a>

```java
public void resetId()
```

##### `resetIndexConfig` <a name="resetIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig"></a>

```java
public void resetIndexConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtlConfig` <a name="resetTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig"></a>

```java
public void resetTtlConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirestoreField resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreField;

GoogleFirestoreField.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreField;

GoogleFirestoreField.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreField;

GoogleFirestoreField.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreField;

GoogleFirestoreField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirestoreField.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirestoreField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirestoreField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirestoreField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig">indexConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig">ttlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput">collectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput">indexConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput">ttlConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection">collection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `indexConfig`<sup>Required</sup> <a name="indexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig"></a>

```java
public GoogleFirestoreFieldIndexConfigOutputReference getIndexConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts"></a>

```java
public GoogleFirestoreFieldTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a>

---

##### `ttlConfig`<sup>Required</sup> <a name="ttlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig"></a>

```java
public GoogleFirestoreFieldTtlConfigOutputReference getTtlConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a>

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput"></a>

```java
public java.lang.String getCollectionInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexConfigInput`<sup>Optional</sup> <a name="indexConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput"></a>

```java
public GoogleFirestoreFieldIndexConfig getIndexConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---

##### `ttlConfigInput`<sup>Optional</sup> <a name="ttlConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput"></a>

```java
public GoogleFirestoreFieldTtlConfig getTtlConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreFieldConfig <a name="GoogleFirestoreFieldConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldConfig;

GoogleFirestoreFieldConfig.builder()
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
    .collection(java.lang.String)
    .field(java.lang.String)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .indexConfig(GoogleFirestoreFieldIndexConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreFieldTimeouts)
//  .ttlConfig(GoogleFirestoreFieldTtlConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection">collection</a></code> | <code>java.lang.String</code> | The id of the collection group to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field">field</a></code> | <code>java.lang.String</code> | The id of the field to configure. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig">indexConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig">ttlConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#collection GoogleFirestoreField#collection}

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#field GoogleFirestoreField#field}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#database GoogleFirestoreField#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfig`<sup>Optional</sup> <a name="indexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig"></a>

```java
public GoogleFirestoreFieldIndexConfig getIndexConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#index_config GoogleFirestoreField#index_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts"></a>

```java
public GoogleFirestoreFieldTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#timeouts GoogleFirestoreField#timeouts}

---

##### `ttlConfig`<sup>Optional</sup> <a name="ttlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig"></a>

```java
public GoogleFirestoreFieldTtlConfig getTtlConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#ttl_config GoogleFirestoreField#ttl_config}

---

### GoogleFirestoreFieldIndexConfig <a name="GoogleFirestoreFieldIndexConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldIndexConfig;

GoogleFirestoreFieldIndexConfig.builder()
//  .indexes(IResolvable)
//  .indexes(java.util.List<GoogleFirestoreFieldIndexConfigIndexes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes">indexes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>></code> | indexes block. |

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes"></a>

```java
public java.lang.Object getIndexes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>>

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#indexes GoogleFirestoreField#indexes}

---

### GoogleFirestoreFieldIndexConfigIndexes <a name="GoogleFirestoreFieldIndexConfigIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldIndexConfigIndexes;

GoogleFirestoreFieldIndexConfigIndexes.builder()
//  .arrayConfig(java.lang.String)
//  .order(java.lang.String)
//  .queryScope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig">arrayConfig</a></code> | <code>java.lang.String</code> | Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order">order</a></code> | <code>java.lang.String</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope">queryScope</a></code> | <code>java.lang.String</code> | The scope at which a query is run. |

---

##### `arrayConfig`<sup>Optional</sup> <a name="arrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig"></a>

```java
public java.lang.String getArrayConfig();
```

- *Type:* java.lang.String

Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#array_config GoogleFirestoreField#array_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#order GoogleFirestoreField#order}

---

##### `queryScope`<sup>Optional</sup> <a name="queryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope"></a>

```java
public java.lang.String getQueryScope();
```

- *Type:* java.lang.String

The scope at which a query is run.

Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#query_scope GoogleFirestoreField#query_scope}

---

### GoogleFirestoreFieldTimeouts <a name="GoogleFirestoreFieldTimeouts" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldTimeouts;

GoogleFirestoreFieldTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}.

---

### GoogleFirestoreFieldTtlConfig <a name="GoogleFirestoreFieldTtlConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldTtlConfig;

GoogleFirestoreFieldTtlConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreFieldIndexConfigIndexesList <a name="GoogleFirestoreFieldIndexConfigIndexesList" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldIndexConfigIndexesList;

new GoogleFirestoreFieldIndexConfigIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get"></a>

```java
public GoogleFirestoreFieldIndexConfigIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>>

---


### GoogleFirestoreFieldIndexConfigIndexesOutputReference <a name="GoogleFirestoreFieldIndexConfigIndexesOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldIndexConfigIndexesOutputReference;

new GoogleFirestoreFieldIndexConfigIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig">resetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope">resetQueryScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArrayConfig` <a name="resetArrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig"></a>

```java
public void resetArrayConfig()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetQueryScope` <a name="resetQueryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope"></a>

```java
public void resetQueryScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput">arrayConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput">queryScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig">arrayConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope">queryScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arrayConfigInput`<sup>Optional</sup> <a name="arrayConfigInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput"></a>

```java
public java.lang.String getArrayConfigInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `queryScopeInput`<sup>Optional</sup> <a name="queryScopeInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput"></a>

```java
public java.lang.String getQueryScopeInput();
```

- *Type:* java.lang.String

---

##### `arrayConfig`<sup>Required</sup> <a name="arrayConfig" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig"></a>

```java
public java.lang.String getArrayConfig();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `queryScope`<sup>Required</sup> <a name="queryScope" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope"></a>

```java
public java.lang.String getQueryScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>

---


### GoogleFirestoreFieldIndexConfigOutputReference <a name="GoogleFirestoreFieldIndexConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldIndexConfigOutputReference;

new GoogleFirestoreFieldIndexConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes">putIndexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes">resetIndexes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIndexes` <a name="putIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes"></a>

```java
public void putIndexes(IResolvable OR java.util.List<GoogleFirestoreFieldIndexConfigIndexes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>>

---

##### `resetIndexes` <a name="resetIndexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes"></a>

```java
public void resetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes">indexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput">indexesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes"></a>

```java
public GoogleFirestoreFieldIndexConfigIndexesList getIndexes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a>

---

##### `indexesInput`<sup>Optional</sup> <a name="indexesInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput"></a>

```java
public java.lang.Object getIndexesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreFieldIndexConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---


### GoogleFirestoreFieldTimeoutsOutputReference <a name="GoogleFirestoreFieldTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldTimeoutsOutputReference;

new GoogleFirestoreFieldTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---


### GoogleFirestoreFieldTtlConfigOutputReference <a name="GoogleFirestoreFieldTtlConfigOutputReference" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firestore_field.GoogleFirestoreFieldTtlConfigOutputReference;

new GoogleFirestoreFieldTtlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreFieldTtlConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---



