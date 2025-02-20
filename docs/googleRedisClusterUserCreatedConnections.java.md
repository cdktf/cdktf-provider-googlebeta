# `googleRedisClusterUserCreatedConnections` Submodule <a name="`googleRedisClusterUserCreatedConnections` Submodule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisClusterUserCreatedConnections <a name="GoogleRedisClusterUserCreatedConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnections;

GoogleRedisClusterUserCreatedConnections.Builder.create(Construct scope, java.lang.String id)
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
    .region(java.lang.String)
//  .clusterEndpoints(IResolvable)
//  .clusterEndpoints(java.util.List<GoogleRedisClusterUserCreatedConnectionsClusterEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleRedisClusterUserCreatedConnectionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints">clusterEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>>

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints">putClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints">resetClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoints` <a name="putClusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```java
public void putClusterEndpoints(IResolvable OR java.util.List<GoogleRedisClusterUserCreatedConnectionsClusterEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts"></a>

```java
public void putTimeouts(GoogleRedisClusterUserCreatedConnectionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `resetClusterEndpoints` <a name="resetClusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```java
public void resetClusterEndpoints()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnections;

GoogleRedisClusterUserCreatedConnections.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnections;

GoogleRedisClusterUserCreatedConnections.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnections;

GoogleRedisClusterUserCreatedConnections.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnections;

GoogleRedisClusterUserCreatedConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleRedisClusterUserCreatedConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleRedisClusterUserCreatedConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleRedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints">clusterEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput">clusterEndpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterEndpoints`<sup>Required</sup> <a name="clusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList getClusterEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `clusterEndpointsInput`<sup>Optional</sup> <a name="clusterEndpointsInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```java
public java.lang.Object getClusterEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpoints <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints;

GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.builder()
//  .connections(IResolvable)
//  .connections(java.util.List<GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```java
public java.lang.Object getConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#connections GoogleRedisClusterUserCreatedConnections#connections}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections;

GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.builder()
//  .pscConnection(GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `pscConnection`<sup>Optional</sup> <a name="pscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getPscConnection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection GoogleRedisClusterUserCreatedConnections#psc_connection}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;

GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.builder()
    .address(java.lang.String)
    .forwardingRule(java.lang.String)
    .network(java.lang.String)
    .pscConnectionId(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">address</a></code> | <code>java.lang.String</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>java.lang.String</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#address GoogleRedisClusterUserCreatedConnections#address}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#forwarding_rule GoogleRedisClusterUserCreatedConnections#forwarding_rule}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#network GoogleRedisClusterUserCreatedConnections#network}

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection_id GoogleRedisClusterUserCreatedConnections#psc_connection_id}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#service_attachment GoogleRedisClusterUserCreatedConnections#service_attachment}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#project_id GoogleRedisClusterUserCreatedConnections#project_id}

---

### GoogleRedisClusterUserCreatedConnectionsConfig <a name="GoogleRedisClusterUserCreatedConnectionsConfig" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsConfig;

GoogleRedisClusterUserCreatedConnectionsConfig.builder()
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
    .region(java.lang.String)
//  .clusterEndpoints(IResolvable)
//  .clusterEndpoints(java.util.List<GoogleRedisClusterUserCreatedConnectionsClusterEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleRedisClusterUserCreatedConnectionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">clusterEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```java
public java.lang.Object getClusterEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>>

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}

---

### GoogleRedisClusterUserCreatedConnectionsTimeouts <a name="GoogleRedisClusterUserCreatedConnectionsTimeouts" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsTimeouts;

GoogleRedisClusterUserCreatedConnectionsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList;

new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference;

new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">putPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">resetPscConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscConnection` <a name="putPscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```java
public void putPscConnection(GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `resetPscConnection` <a name="resetPscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```java
public void resetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">pscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscConnection`<sup>Required</sup> <a name="pscConnection" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference getPscConnection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `pscConnectionInput`<sup>Optional</sup> <a name="pscConnectionInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getPscConnectionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference;

new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```java
public java.lang.String getPscConnectionStatus();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```java
public java.lang.String getForwardingRuleInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```java
public java.lang.String getPscConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```java
public java.lang.String getServiceAttachmentInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList;

new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference;

new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```java
public void putConnections(IResolvable OR java.util.List<GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---

##### `resetConnections` <a name="resetConnections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```java
public void resetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```java
public GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```java
public java.lang.Object getConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>

---


### GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_redis_cluster_user_created_connections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference;

new GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---



