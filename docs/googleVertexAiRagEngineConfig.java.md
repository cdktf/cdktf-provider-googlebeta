# `googleVertexAiRagEngineConfig` Submodule <a name="`googleVertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagEngineConfig <a name="GoogleVertexAiRagEngineConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfig;

GoogleVertexAiRagEngineConfig.Builder.create(Construct scope, java.lang.String id)
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
    .ragManagedDbConfig(GoogleVertexAiRagEngineConfigRagManagedDbConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiRagEngineConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig">putRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRagManagedDbConfig` <a name="putRagManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```java
public void putRagManagedDbConfig(GoogleVertexAiRagEngineConfigRagManagedDbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiRagEngineConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfig;

GoogleVertexAiRagEngineConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfig;

GoogleVertexAiRagEngineConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfig;

GoogleVertexAiRagEngineConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfig;

GoogleVertexAiRagEngineConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiRagEngineConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiRagEngineConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput">ragManagedDbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference getRagManagedDbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts"></a>

```java
public GoogleVertexAiRagEngineConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `ragManagedDbConfigInput`<sup>Optional</sup> <a name="ragManagedDbConfigInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfig getRagManagedDbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagEngineConfigConfig <a name="GoogleVertexAiRagEngineConfigConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigConfig;

GoogleVertexAiRagEngineConfigConfig.builder()
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
    .ragManagedDbConfig(GoogleVertexAiRagEngineConfigRagManagedDbConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiRagEngineConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig">ragManagedDbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ragManagedDbConfig`<sup>Required</sup> <a name="ragManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfig getRagManagedDbConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts"></a>

```java
public GoogleVertexAiRagEngineConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfig <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfig;

GoogleVertexAiRagEngineConfigRagManagedDbConfig.builder()
//  .basic(GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic)
//  .scaled(GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled)
//  .unprovisioned(GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic getBasic();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#basic GoogleVertexAiRagEngineConfig#basic}

---

##### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled getScaled();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#scaled GoogleVertexAiRagEngineConfig#scaled}

---

##### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned getUnprovisioned();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#unprovisioned GoogleVertexAiRagEngineConfig#unprovisioned}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic;

GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic.builder()
    .build();
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled;

GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled.builder()
    .build();
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned;

GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.builder()
    .build();
```


### GoogleVertexAiRagEngineConfigTimeouts <a name="GoogleVertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigTimeouts;

GoogleVertexAiRagEngineConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference;

new GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference;

new GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">putScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">putUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">resetScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">resetUnprovisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```java
public void putBasic(GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `putScaled` <a name="putScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```java
public void putScaled(GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `putUnprovisioned` <a name="putUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```java
public void putUnprovisioned(GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```java
public void resetBasic()
```

##### `resetScaled` <a name="resetScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```java
public void resetScaled()
```

##### `resetUnprovisioned` <a name="resetUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```java
public void resetUnprovisioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">scaledInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">unprovisionedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference getBasic();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `scaled`<sup>Required</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference getScaled();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `unprovisioned`<sup>Required</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference getUnprovisioned();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic getBasicInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `scaledInput`<sup>Optional</sup> <a name="scaledInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled getScaledInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `unprovisionedInput`<sup>Optional</sup> <a name="unprovisionedInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned getUnprovisionedInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference;

new GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference;

new GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### GoogleVertexAiRagEngineConfigTimeoutsOutputReference <a name="GoogleVertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_rag_engine_config.GoogleVertexAiRagEngineConfigTimeoutsOutputReference;

new GoogleVertexAiRagEngineConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---



