# `googleVertexAiMetadataStore` Submodule <a name="`googleVertexAiMetadataStore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiMetadataStore <a name="GoogleVertexAiMetadataStore" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store google_vertex_ai_metadata_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStore;

GoogleVertexAiMetadataStore.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiMetadataStoreEncryptionSpec)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiMetadataStoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the Metadata Store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the MetadataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#description GoogleVertexAiMetadataStore#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#encryption_spec GoogleVertexAiMetadataStore#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the MetadataStore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#name GoogleVertexAiMetadataStore#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the Metadata Store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#region GoogleVertexAiMetadataStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#timeouts GoogleVertexAiMetadataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleVertexAiMetadataStoreEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiMetadataStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiMetadataStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStore;

GoogleVertexAiMetadataStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStore;

GoogleVertexAiMetadataStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStore;

GoogleVertexAiMetadataStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStore;

GoogleVertexAiMetadataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiMetadataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiMetadataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiMetadataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiMetadataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiMetadataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference">GoogleVertexAiMetadataStoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList">GoogleVertexAiMetadataStoreStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference">GoogleVertexAiMetadataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpec"></a>

```java
public GoogleVertexAiMetadataStoreEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference">GoogleVertexAiMetadataStoreEncryptionSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.state"></a>

```java
public GoogleVertexAiMetadataStoreStateList getState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList">GoogleVertexAiMetadataStoreStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeouts"></a>

```java
public GoogleVertexAiMetadataStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference">GoogleVertexAiMetadataStoreTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpecInput"></a>

```java
public GoogleVertexAiMetadataStoreEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiMetadataStoreConfig <a name="GoogleVertexAiMetadataStoreConfig" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreConfig;

GoogleVertexAiMetadataStoreConfig.builder()
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
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiMetadataStoreEncryptionSpec)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiMetadataStoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the Metadata Store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the MetadataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#description GoogleVertexAiMetadataStore#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.encryptionSpec"></a>

```java
public GoogleVertexAiMetadataStoreEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#encryption_spec GoogleVertexAiMetadataStore#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MetadataStore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#name GoogleVertexAiMetadataStore#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the Metadata Store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#region GoogleVertexAiMetadataStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.timeouts"></a>

```java
public GoogleVertexAiMetadataStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#timeouts GoogleVertexAiMetadataStore#timeouts}

---

### GoogleVertexAiMetadataStoreEncryptionSpec <a name="GoogleVertexAiMetadataStoreEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreEncryptionSpec;

GoogleVertexAiMetadataStoreEncryptionSpec.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#kms_key_name GoogleVertexAiMetadataStore#kms_key_name}

---

### GoogleVertexAiMetadataStoreState <a name="GoogleVertexAiMetadataStoreState" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreState;

GoogleVertexAiMetadataStoreState.builder()
    .build();
```


### GoogleVertexAiMetadataStoreTimeouts <a name="GoogleVertexAiMetadataStoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreTimeouts;

GoogleVertexAiMetadataStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#create GoogleVertexAiMetadataStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#delete GoogleVertexAiMetadataStore#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#create GoogleVertexAiMetadataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vertex_ai_metadata_store#delete GoogleVertexAiMetadataStore#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiMetadataStoreEncryptionSpecOutputReference <a name="GoogleVertexAiMetadataStoreEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference;

new GoogleVertexAiMetadataStoreEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiMetadataStoreEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

---


### GoogleVertexAiMetadataStoreStateList <a name="GoogleVertexAiMetadataStoreStateList" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreStateList;

new GoogleVertexAiMetadataStoreStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get"></a>

```java
public GoogleVertexAiMetadataStoreStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiMetadataStoreStateOutputReference <a name="GoogleVertexAiMetadataStoreStateOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreStateOutputReference;

new GoogleVertexAiMetadataStoreStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.diskUtilizationBytes">diskUtilizationBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState">GoogleVertexAiMetadataStoreState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskUtilizationBytes`<sup>Required</sup> <a name="diskUtilizationBytes" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.diskUtilizationBytes"></a>

```java
public java.lang.String getDiskUtilizationBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiMetadataStoreState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState">GoogleVertexAiMetadataStoreState</a>

---


### GoogleVertexAiMetadataStoreTimeoutsOutputReference <a name="GoogleVertexAiMetadataStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_metadata_store.GoogleVertexAiMetadataStoreTimeoutsOutputReference;

new GoogleVertexAiMetadataStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

---



