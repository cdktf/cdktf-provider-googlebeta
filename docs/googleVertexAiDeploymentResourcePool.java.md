# `googleVertexAiDeploymentResourcePool` Submodule <a name="`googleVertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiDeploymentResourcePool <a name="GoogleVertexAiDeploymentResourcePool" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePool;

GoogleVertexAiDeploymentResourcePool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .dedicatedResources(GoogleVertexAiDeploymentResourcePoolDedicatedResources)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiDeploymentResourcePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources">putDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources">resetDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDedicatedResources` <a name="putDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources"></a>

```java
public void putDedicatedResources(GoogleVertexAiDeploymentResourcePoolDedicatedResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiDeploymentResourcePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---

##### `resetDedicatedResources` <a name="resetDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```java
public void resetDedicatedResources()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePool;

GoogleVertexAiDeploymentResourcePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePool;

GoogleVertexAiDeploymentResourcePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePool;

GoogleVertexAiDeploymentResourcePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePool;

GoogleVertexAiDeploymentResourcePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiDeploymentResourcePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiDeploymentResourcePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput">dedicatedResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedResources`<sup>Required</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts"></a>

```java
public GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `dedicatedResourcesInput`<sup>Optional</sup> <a name="dedicatedResourcesInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResources getDedicatedResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiDeploymentResourcePoolConfig <a name="GoogleVertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolConfig;

GoogleVertexAiDeploymentResourcePoolConfig.builder()
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
    .name(java.lang.String)
//  .dedicatedResources(GoogleVertexAiDeploymentResourcePoolDedicatedResources)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleVertexAiDeploymentResourcePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources">dedicatedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `dedicatedResources`<sup>Optional</sup> <a name="dedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResources getDedicatedResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```java
public GoogleVertexAiDeploymentResourcePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResources <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResources;

GoogleVertexAiDeploymentResourcePoolDedicatedResources.builder()
    .machineSpec(GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec)
    .minReplicaCount(java.lang.Number)
//  .autoscalingMetricSpecs(IResolvable)
//  .autoscalingMetricSpecs(java.util.List<GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs>)
//  .maxReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">autoscalingMetricSpecs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>></code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_spec GoogleVertexAiDeploymentResourcePool#machine_spec}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#min_replica_count GoogleVertexAiDeploymentResourcePool#min_replica_count}

---

##### `autoscalingMetricSpecs`<sup>Optional</sup> <a name="autoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```java
public java.lang.Object getAutoscalingMetricSpecs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>>

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#autoscaling_metric_specs GoogleVertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#max_replica_count GoogleVertexAiDeploymentResourcePool#max_replica_count}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs;

GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.builder()
    .metricName(java.lang.String)
//  .target(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">target</a></code> | <code>java.lang.Number</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#metric_name GoogleVertexAiDeploymentResourcePool#metric_name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#target GoogleVertexAiDeploymentResourcePool#target}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec;

GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_count GoogleVertexAiDeploymentResourcePool#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_type GoogleVertexAiDeploymentResourcePool#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_type GoogleVertexAiDeploymentResourcePool#machine_type}

---

### GoogleVertexAiDeploymentResourcePoolTimeouts <a name="GoogleVertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolTimeouts;

GoogleVertexAiDeploymentResourcePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference;

new GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">putAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">resetAutoscalingMetricSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingMetricSpecs` <a name="putAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```java
public void putAutoscalingMetricSpecs(IResolvable OR java.util.List<GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `resetAutoscalingMetricSpecs` <a name="resetAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```java
public void resetAutoscalingMetricSpecs()
```

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">autoscalingMetricSpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">autoscalingMetricSpecsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingMetricSpecs`<sup>Required</sup> <a name="autoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList getAutoscalingMetricSpecs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `autoscalingMetricSpecsInput`<sup>Optional</sup> <a name="autoscalingMetricSpecsInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```java
public java.lang.Object getAutoscalingMetricSpecsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiDeploymentResourcePoolDedicatedResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---


### GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_deployment_resource_pool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference;

new GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

---



