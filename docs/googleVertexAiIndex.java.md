# `googleVertexAiIndex` Submodule <a name="`googleVertexAiIndex` Submodule" id="@cdktf/provider-google-beta.googleVertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndex <a name="GoogleVertexAiIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndex;

GoogleVertexAiIndex.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexUpdateMethod(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(GoogleVertexAiIndexMetadata)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#display_name GoogleVertexAiIndex#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#description GoogleVertexAiIndex#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexUpdateMethod`<sup>Optional</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.indexUpdateMethod"></a>

- *Type:* java.lang.String

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.

* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#index_update_method GoogleVertexAiIndex#index_update_method}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#labels GoogleVertexAiIndex#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#metadata GoogleVertexAiIndex#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#region GoogleVertexAiIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#timeouts GoogleVertexAiIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetIndexUpdateMethod">resetIndexUpdateMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata"></a>

```java
public void putMetadata(GoogleVertexAiIndexMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetId"></a>

```java
public void resetId()
```

##### `resetIndexUpdateMethod` <a name="resetIndexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetIndexUpdateMethod"></a>

```java
public void resetIndexUpdateMethod()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndex;

GoogleVertexAiIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndex;

GoogleVertexAiIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndex;

GoogleVertexAiIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndex;

GoogleVertexAiIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.deployedIndexes">deployedIndexes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList">GoogleVertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexStats">indexStats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList">GoogleVertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference">GoogleVertexAiIndexMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataSchemaUri">metadataSchemaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference">GoogleVertexAiIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethodInput">indexUpdateMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deployedIndexes`<sup>Required</sup> <a name="deployedIndexes" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.deployedIndexes"></a>

```java
public GoogleVertexAiIndexDeployedIndexesList getDeployedIndexes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList">GoogleVertexAiIndexDeployedIndexesList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `indexStats`<sup>Required</sup> <a name="indexStats" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexStats"></a>

```java
public GoogleVertexAiIndexIndexStatsList getIndexStats();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList">GoogleVertexAiIndexIndexStatsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadata"></a>

```java
public GoogleVertexAiIndexMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference">GoogleVertexAiIndexMetadataOutputReference</a>

---

##### `metadataSchemaUri`<sup>Required</sup> <a name="metadataSchemaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataSchemaUri"></a>

```java
public java.lang.String getMetadataSchemaUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeouts"></a>

```java
public GoogleVertexAiIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference">GoogleVertexAiIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexUpdateMethodInput`<sup>Optional</sup> <a name="indexUpdateMethodInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethodInput"></a>

```java
public java.lang.String getIndexUpdateMethodInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.metadataInput"></a>

```java
public GoogleVertexAiIndexMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexUpdateMethod`<sup>Required</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.indexUpdateMethod"></a>

```java
public java.lang.String getIndexUpdateMethod();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexConfig <a name="GoogleVertexAiIndexConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexConfig;

GoogleVertexAiIndexConfig.builder()
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
    .displayName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .indexUpdateMethod(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(GoogleVertexAiIndexMetadata)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>java.lang.String</code> | The update method to use with this Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#display_name GoogleVertexAiIndex#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#description GoogleVertexAiIndex#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#id GoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexUpdateMethod`<sup>Optional</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.indexUpdateMethod"></a>

```java
public java.lang.String getIndexUpdateMethod();
```

- *Type:* java.lang.String

The update method to use with this Index.

The value must be the followings. If not set, BATCH_UPDATE will be used by default.

* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#index_update_method GoogleVertexAiIndex#index_update_method}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#labels GoogleVertexAiIndex#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.metadata"></a>

```java
public GoogleVertexAiIndexMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#metadata GoogleVertexAiIndex#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#project GoogleVertexAiIndex#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#region GoogleVertexAiIndex#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexConfig.property.timeouts"></a>

```java
public GoogleVertexAiIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#timeouts GoogleVertexAiIndex#timeouts}

---

### GoogleVertexAiIndexDeployedIndexes <a name="GoogleVertexAiIndexDeployedIndexes" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexDeployedIndexes;

GoogleVertexAiIndexDeployedIndexes.builder()
    .build();
```


### GoogleVertexAiIndexIndexStats <a name="GoogleVertexAiIndexIndexStats" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexIndexStats;

GoogleVertexAiIndexIndexStats.builder()
    .build();
```


### GoogleVertexAiIndexMetadata <a name="GoogleVertexAiIndexMetadata" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadata;

GoogleVertexAiIndexMetadata.builder()
//  .config(GoogleVertexAiIndexMetadataConfig)
//  .contentsDeltaUri(java.lang.String)
//  .isCompleteOverwrite(java.lang.Boolean)
//  .isCompleteOverwrite(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>java.lang.String</code> | Allows inserting, updating  or deleting the contents of the Matching Engine Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.config"></a>

```java
public GoogleVertexAiIndexMetadataConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#config GoogleVertexAiIndex#config}

---

##### `contentsDeltaUri`<sup>Optional</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.contentsDeltaUri"></a>

```java
public java.lang.String getContentsDeltaUri();
```

- *Type:* java.lang.String

Allows inserting, updating  or deleting the contents of the Matching Engine Index.

The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#contents_delta_uri GoogleVertexAiIndex#contents_delta_uri}

---

##### `isCompleteOverwrite`<sup>Optional</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata.property.isCompleteOverwrite"></a>

```java
public java.lang.Object getIsCompleteOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex, then existing content of the Index will be replaced by the data from the contentsDeltaUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#is_complete_overwrite GoogleVertexAiIndex#is_complete_overwrite}

---

### GoogleVertexAiIndexMetadataConfig <a name="GoogleVertexAiIndexMetadataConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfig;

GoogleVertexAiIndexMetadataConfig.builder()
    .dimensions(java.lang.Number)
//  .algorithmConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfig)
//  .approximateNeighborsCount(java.lang.Number)
//  .distanceMeasureType(java.lang.String)
//  .featureNormType(java.lang.String)
//  .shardSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | The number of dimensions of the input vectors. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | algorithm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>java.lang.Number</code> | The default number of neighbors to find via approximate search before exact reordering is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.distanceMeasureType">distanceMeasureType</a></code> | <code>java.lang.String</code> | The distance measure used in nearest neighbor search. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | Type of normalization to be carried out on each vector. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.shardSize">shardSize</a></code> | <code>java.lang.String</code> | Index data is split into equal parts to be processed. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

The number of dimensions of the input vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#dimensions GoogleVertexAiIndex#dimensions}

---

##### `algorithmConfig`<sup>Optional</sup> <a name="algorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.algorithmConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfig getAlgorithmConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

algorithm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#algorithm_config GoogleVertexAiIndex#algorithm_config}

---

##### `approximateNeighborsCount`<sup>Optional</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.approximateNeighborsCount"></a>

```java
public java.lang.Number getApproximateNeighborsCount();
```

- *Type:* java.lang.Number

The default number of neighbors to find via approximate search before exact reordering is performed.

Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#approximate_neighbors_count GoogleVertexAiIndex#approximate_neighbors_count}

---

##### `distanceMeasureType`<sup>Optional</sup> <a name="distanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.distanceMeasureType"></a>

```java
public java.lang.String getDistanceMeasureType();
```

- *Type:* java.lang.String

The distance measure used in nearest neighbor search.

The value must be one of the followings:

* SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
* L1_DISTANCE: Manhattan (L_1) Distance
* COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
* DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#distance_measure_type GoogleVertexAiIndex#distance_measure_type}

---

##### `featureNormType`<sup>Optional</sup> <a name="featureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

Type of normalization to be carried out on each vector.

The value must be one of the followings:

* UNIT_L2_NORM: Unit L2 normalization type
* NONE: No normalization type is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#feature_norm_type GoogleVertexAiIndex#feature_norm_type}

---

##### `shardSize`<sup>Optional</sup> <a name="shardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig.property.shardSize"></a>

```java
public java.lang.String getShardSize();
```

- *Type:* java.lang.String

Index data is split into equal parts to be processed.

These are called "shards".
The shard size must be specified when creating an index. The value must be one of the followings:

* SHARD_SIZE_SMALL: Small (2GB)
* SHARD_SIZE_MEDIUM: Medium (20GB)
* SHARD_SIZE_LARGE: Large (50GB)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#shard_size GoogleVertexAiIndex#shard_size}

---

### GoogleVertexAiIndexMetadataConfigAlgorithmConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfig;

GoogleVertexAiIndexMetadataConfigAlgorithmConfig.builder()
//  .bruteForceConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig)
//  .treeAhConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | brute_force_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | tree_ah_config block. |

---

##### `bruteForceConfig`<sup>Optional</sup> <a name="bruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.bruteForceConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getBruteForceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

brute_force_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#brute_force_config GoogleVertexAiIndex#brute_force_config}

---

##### `treeAhConfig`<sup>Optional</sup> <a name="treeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig.property.treeAhConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getTreeAhConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

tree_ah_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#tree_ah_config GoogleVertexAiIndex#tree_ah_config}

---

### GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;

GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.builder()
    .build();
```


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;

GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.builder()
//  .leafNodeEmbeddingCount(java.lang.Number)
//  .leafNodesToSearchPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>java.lang.Number</code> | Number of embeddings on each leaf node. The default value is 1000 if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>java.lang.Number</code> | The default percentage of leaf nodes that any query may be searched. |

---

##### `leafNodeEmbeddingCount`<sup>Optional</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodeEmbeddingCount"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCount();
```

- *Type:* java.lang.Number

Number of embeddings on each leaf node. The default value is 1000 if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#leaf_node_embedding_count GoogleVertexAiIndex#leaf_node_embedding_count}

---

##### `leafNodesToSearchPercent`<sup>Optional</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.property.leafNodesToSearchPercent"></a>

```java
public java.lang.Number getLeafNodesToSearchPercent();
```

- *Type:* java.lang.Number

The default percentage of leaf nodes that any query may be searched.

Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#leaf_nodes_to_search_percent GoogleVertexAiIndex#leaf_nodes_to_search_percent}

---

### GoogleVertexAiIndexTimeouts <a name="GoogleVertexAiIndexTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexTimeouts;

GoogleVertexAiIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#create GoogleVertexAiIndex#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#delete GoogleVertexAiIndex#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#update GoogleVertexAiIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#create GoogleVertexAiIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#delete GoogleVertexAiIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vertex_ai_index#update GoogleVertexAiIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexDeployedIndexesList <a name="GoogleVertexAiIndexDeployedIndexesList" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexDeployedIndexesList;

new GoogleVertexAiIndexDeployedIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get"></a>

```java
public GoogleVertexAiIndexDeployedIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiIndexDeployedIndexesOutputReference <a name="GoogleVertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexDeployedIndexesOutputReference;

new GoogleVertexAiIndexDeployedIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">deployedIndexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes">GoogleVertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```java
public java.lang.String getDeployedIndexId();
```

- *Type:* java.lang.String

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```java
public java.lang.String getIndexEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexDeployedIndexes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexDeployedIndexes">GoogleVertexAiIndexDeployedIndexes</a>

---


### GoogleVertexAiIndexIndexStatsList <a name="GoogleVertexAiIndexIndexStatsList" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexIndexStatsList;

new GoogleVertexAiIndexIndexStatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get"></a>

```java
public GoogleVertexAiIndexIndexStatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVertexAiIndexIndexStatsOutputReference <a name="GoogleVertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexIndexStatsOutputReference;

new GoogleVertexAiIndexIndexStatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount">shardsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount">vectorsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats">GoogleVertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shardsCount`<sup>Required</sup> <a name="shardsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```java
public java.lang.Number getShardsCount();
```

- *Type:* java.lang.Number

---

##### `vectorsCount`<sup>Required</sup> <a name="vectorsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```java
public java.lang.String getVectorsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexIndexStats getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexIndexStats">GoogleVertexAiIndexIndexStats</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference;

new GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference;

new GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig">putBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig">putTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig">resetBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig">resetTreeAhConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBruteForceConfig` <a name="putBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig"></a>

```java
public void putBruteForceConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putBruteForceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `putTreeAhConfig` <a name="putTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig"></a>

```java
public void putTreeAhConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.putTreeAhConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `resetBruteForceConfig` <a name="resetBruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetBruteForceConfig"></a>

```java
public void resetBruteForceConfig()
```

##### `resetTreeAhConfig` <a name="resetTreeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resetTreeAhConfig"></a>

```java
public void resetTreeAhConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput">bruteForceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput">treeAhConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bruteForceConfig`<sup>Required</sup> <a name="bruteForceConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference getBruteForceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference</a>

---

##### `treeAhConfig`<sup>Required</sup> <a name="treeAhConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference getTreeAhConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference</a>

---

##### `bruteForceConfigInput`<sup>Optional</sup> <a name="bruteForceConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfigInput"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig getBruteForceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---

##### `treeAhConfigInput`<sup>Optional</sup> <a name="treeAhConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfigInput"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getTreeAhConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference;

new GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount">resetLeafNodeEmbeddingCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent">resetLeafNodesToSearchPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLeafNodeEmbeddingCount` <a name="resetLeafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodeEmbeddingCount"></a>

```java
public void resetLeafNodeEmbeddingCount()
```

##### `resetLeafNodesToSearchPercent` <a name="resetLeafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resetLeafNodesToSearchPercent"></a>

```java
public void resetLeafNodesToSearchPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput">leafNodeEmbeddingCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput">leafNodesToSearchPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `leafNodeEmbeddingCountInput`<sup>Optional</sup> <a name="leafNodeEmbeddingCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCountInput"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCountInput();
```

- *Type:* java.lang.Number

---

##### `leafNodesToSearchPercentInput`<sup>Optional</sup> <a name="leafNodesToSearchPercentInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercentInput"></a>

```java
public java.lang.Number getLeafNodesToSearchPercentInput();
```

- *Type:* java.lang.Number

---

##### `leafNodeEmbeddingCount`<sup>Required</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```java
public java.lang.Number getLeafNodeEmbeddingCount();
```

- *Type:* java.lang.Number

---

##### `leafNodesToSearchPercent`<sup>Required</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```java
public java.lang.Number getLeafNodesToSearchPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### GoogleVertexAiIndexMetadataConfigOutputReference <a name="GoogleVertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataConfigOutputReference;

new GoogleVertexAiIndexMetadataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig">putAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig">resetAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount">resetApproximateNeighborsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType">resetDistanceMeasureType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetFeatureNormType">resetFeatureNormType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetShardSize">resetShardSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlgorithmConfig` <a name="putAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig"></a>

```java
public void putAlgorithmConfig(GoogleVertexAiIndexMetadataConfigAlgorithmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.putAlgorithmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `resetAlgorithmConfig` <a name="resetAlgorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetAlgorithmConfig"></a>

```java
public void resetAlgorithmConfig()
```

##### `resetApproximateNeighborsCount` <a name="resetApproximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetApproximateNeighborsCount"></a>

```java
public void resetApproximateNeighborsCount()
```

##### `resetDistanceMeasureType` <a name="resetDistanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetDistanceMeasureType"></a>

```java
public void resetDistanceMeasureType()
```

##### `resetFeatureNormType` <a name="resetFeatureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetFeatureNormType"></a>

```java
public void resetFeatureNormType()
```

##### `resetShardSize` <a name="resetShardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.resetShardSize"></a>

```java
public void resetShardSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput">algorithmConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput">approximateNeighborsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput">distanceMeasureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput">featureNormTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSizeInput">shardSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions">dimensions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">distanceMeasureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize">shardSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmConfig`<sup>Required</sup> <a name="algorithmConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference getAlgorithmConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference">GoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference</a>

---

##### `algorithmConfigInput`<sup>Optional</sup> <a name="algorithmConfigInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfigInput"></a>

```java
public GoogleVertexAiIndexMetadataConfigAlgorithmConfig getAlgorithmConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigAlgorithmConfig">GoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---

##### `approximateNeighborsCountInput`<sup>Optional</sup> <a name="approximateNeighborsCountInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCountInput"></a>

```java
public java.lang.Number getApproximateNeighborsCountInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensionsInput"></a>

```java
public java.lang.Number getDimensionsInput();
```

- *Type:* java.lang.Number

---

##### `distanceMeasureTypeInput`<sup>Optional</sup> <a name="distanceMeasureTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureTypeInput"></a>

```java
public java.lang.String getDistanceMeasureTypeInput();
```

- *Type:* java.lang.String

---

##### `featureNormTypeInput`<sup>Optional</sup> <a name="featureNormTypeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormTypeInput"></a>

```java
public java.lang.String getFeatureNormTypeInput();
```

- *Type:* java.lang.String

---

##### `shardSizeInput`<sup>Optional</sup> <a name="shardSizeInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSizeInput"></a>

```java
public java.lang.String getShardSizeInput();
```

- *Type:* java.lang.String

---

##### `approximateNeighborsCount`<sup>Required</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```java
public java.lang.Number getApproximateNeighborsCount();
```

- *Type:* java.lang.Number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```java
public java.lang.Number getDimensions();
```

- *Type:* java.lang.Number

---

##### `distanceMeasureType`<sup>Required</sup> <a name="distanceMeasureType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```java
public java.lang.String getDistanceMeasureType();
```

- *Type:* java.lang.String

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

---

##### `shardSize`<sup>Required</sup> <a name="shardSize" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize"></a>

```java
public java.lang.String getShardSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexMetadataConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---


### GoogleVertexAiIndexMetadataOutputReference <a name="GoogleVertexAiIndexMetadataOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexMetadataOutputReference;

new GoogleVertexAiIndexMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetContentsDeltaUri">resetContentsDeltaUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite">resetIsCompleteOverwrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig"></a>

```java
public void putConfig(GoogleVertexAiIndexMetadataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetContentsDeltaUri` <a name="resetContentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetContentsDeltaUri"></a>

```java
public void resetContentsDeltaUri()
```

##### `resetIsCompleteOverwrite` <a name="resetIsCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.resetIsCompleteOverwrite"></a>

```java
public void resetIsCompleteOverwrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference">GoogleVertexAiIndexMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput">contentsDeltaUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput">isCompleteOverwriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.config"></a>

```java
public GoogleVertexAiIndexMetadataConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfigOutputReference">GoogleVertexAiIndexMetadataConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.configInput"></a>

```java
public GoogleVertexAiIndexMetadataConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataConfig">GoogleVertexAiIndexMetadataConfig</a>

---

##### `contentsDeltaUriInput`<sup>Optional</sup> <a name="contentsDeltaUriInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUriInput"></a>

```java
public java.lang.String getContentsDeltaUriInput();
```

- *Type:* java.lang.String

---

##### `isCompleteOverwriteInput`<sup>Optional</sup> <a name="isCompleteOverwriteInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwriteInput"></a>

```java
public java.lang.Object getIsCompleteOverwriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentsDeltaUri`<sup>Required</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```java
public java.lang.String getContentsDeltaUri();
```

- *Type:* java.lang.String

---

##### `isCompleteOverwrite`<sup>Required</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```java
public java.lang.Object getIsCompleteOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadataOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiIndexMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexMetadata">GoogleVertexAiIndexMetadata</a>

---


### GoogleVertexAiIndexTimeoutsOutputReference <a name="GoogleVertexAiIndexTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_index.GoogleVertexAiIndexTimeoutsOutputReference;

new GoogleVertexAiIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiIndex.GoogleVertexAiIndexTimeouts">GoogleVertexAiIndexTimeouts</a>

---



