# `googleFirebaseAppHostingTraffic` Submodule <a name="`googleFirebaseAppHostingTraffic` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingTraffic <a name="GoogleFirebaseAppHostingTraffic" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic google_firebase_app_hosting_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTraffic;

GoogleFirebaseAppHostingTraffic.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rolloutPolicy(GoogleFirebaseAppHostingTrafficRolloutPolicy)
//  .target(GoogleFirebaseAppHostingTrafficTarget)
//  .timeouts(GoogleFirebaseAppHostingTrafficTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Id of the backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location the Backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Id of the backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#backend GoogleFirebaseAppHostingTraffic#backend}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location the Backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#location GoogleFirebaseAppHostingTraffic#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}.

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.rolloutPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#rollout_policy GoogleFirebaseAppHostingTraffic#rollout_policy}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#target GoogleFirebaseAppHostingTraffic#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#timeouts GoogleFirebaseAppHostingTraffic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy">putRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetRolloutPolicy">resetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRolloutPolicy` <a name="putRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy"></a>

```java
public void putRolloutPolicy(GoogleFirebaseAppHostingTrafficRolloutPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget"></a>

```java
public void putTarget(GoogleFirebaseAppHostingTrafficTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppHostingTrafficTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetProject"></a>

```java
public void resetProject()
```

##### `resetRolloutPolicy` <a name="resetRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetRolloutPolicy"></a>

```java
public void resetRolloutPolicy()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTraffic;

GoogleFirebaseAppHostingTraffic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTraffic;

GoogleFirebaseAppHostingTraffic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTraffic;

GoogleFirebaseAppHostingTraffic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTraffic;

GoogleFirebaseAppHostingTraffic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppHostingTraffic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppHostingTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppHostingTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.current">current</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList">GoogleFirebaseAppHostingTrafficCurrentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference">GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference">GoogleFirebaseAppHostingTrafficTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference">GoogleFirebaseAppHostingTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicyInput">rolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `current`<sup>Required</sup> <a name="current" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.current"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrentList getCurrent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList">GoogleFirebaseAppHostingTrafficCurrentList</a>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rolloutPolicy`<sup>Required</sup> <a name="rolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicy"></a>

```java
public GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference getRolloutPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference">GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.target"></a>

```java
public GoogleFirebaseAppHostingTrafficTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference">GoogleFirebaseAppHostingTrafficTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeouts"></a>

```java
public GoogleFirebaseAppHostingTrafficTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference">GoogleFirebaseAppHostingTrafficTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolloutPolicyInput`<sup>Optional</sup> <a name="rolloutPolicyInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.rolloutPolicyInput"></a>

```java
public GoogleFirebaseAppHostingTrafficRolloutPolicy getRolloutPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.targetInput"></a>

```java
public GoogleFirebaseAppHostingTrafficTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTraffic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingTrafficConfig <a name="GoogleFirebaseAppHostingTrafficConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficConfig;

GoogleFirebaseAppHostingTrafficConfig.builder()
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
    .backend(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rolloutPolicy(GoogleFirebaseAppHostingTrafficRolloutPolicy)
//  .target(GoogleFirebaseAppHostingTrafficTarget)
//  .timeouts(GoogleFirebaseAppHostingTrafficTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Id of the backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location the Backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.rolloutPolicy">rolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Id of the backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#backend GoogleFirebaseAppHostingTraffic#backend}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location the Backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#location GoogleFirebaseAppHostingTraffic#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}.

---

##### `rolloutPolicy`<sup>Optional</sup> <a name="rolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.rolloutPolicy"></a>

```java
public GoogleFirebaseAppHostingTrafficRolloutPolicy getRolloutPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#rollout_policy GoogleFirebaseAppHostingTraffic#rollout_policy}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.target"></a>

```java
public GoogleFirebaseAppHostingTrafficTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#target GoogleFirebaseAppHostingTraffic#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppHostingTrafficTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#timeouts GoogleFirebaseAppHostingTraffic#timeouts}

---

### GoogleFirebaseAppHostingTrafficCurrent <a name="GoogleFirebaseAppHostingTrafficCurrent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrent;

GoogleFirebaseAppHostingTrafficCurrent.builder()
    .build();
```


### GoogleFirebaseAppHostingTrafficCurrentSplits <a name="GoogleFirebaseAppHostingTrafficCurrentSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrentSplits;

GoogleFirebaseAppHostingTrafficCurrentSplits.builder()
    .build();
```


### GoogleFirebaseAppHostingTrafficRolloutPolicy <a name="GoogleFirebaseAppHostingTrafficRolloutPolicy" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficRolloutPolicy;

GoogleFirebaseAppHostingTrafficRolloutPolicy.builder()
//  .codebaseBranch(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch">codebaseBranch</a></code> | <code>java.lang.String</code> | Specifies a branch that triggers a new build to be started with this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A flag that, if true, prevents rollouts from being created via this RolloutPolicy. |

---

##### `codebaseBranch`<sup>Optional</sup> <a name="codebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch"></a>

```java
public java.lang.String getCodebaseBranch();
```

- *Type:* java.lang.String

Specifies a branch that triggers a new build to be started with this policy.

If not set, no automatic rollouts will happen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#codebase_branch GoogleFirebaseAppHostingTraffic#codebase_branch}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A flag that, if true, prevents rollouts from being created via this RolloutPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#disabled GoogleFirebaseAppHostingTraffic#disabled}

---

### GoogleFirebaseAppHostingTrafficTarget <a name="GoogleFirebaseAppHostingTrafficTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTarget;

GoogleFirebaseAppHostingTrafficTarget.builder()
    .splits(IResolvable)
    .splits(java.util.List<GoogleFirebaseAppHostingTrafficTargetSplits>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.property.splits">splits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>></code> | splits block. |

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget.property.splits"></a>

```java
public java.lang.Object getSplits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>>

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#splits GoogleFirebaseAppHostingTraffic#splits}

---

### GoogleFirebaseAppHostingTrafficTargetSplits <a name="GoogleFirebaseAppHostingTrafficTargetSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTargetSplits;

GoogleFirebaseAppHostingTrafficTargetSplits.builder()
    .buildAttribute(java.lang.String)
    .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | The build that traffic is being routed to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.percent">percent</a></code> | <code>java.lang.Number</code> | The percentage of traffic to send to the build. Currently must be 100 or 0. |

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

The build that traffic is being routed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#build GoogleFirebaseAppHostingTraffic#build}

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

The percentage of traffic to send to the build. Currently must be 100 or 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#percent GoogleFirebaseAppHostingTraffic#percent}

---

### GoogleFirebaseAppHostingTrafficTimeouts <a name="GoogleFirebaseAppHostingTrafficTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTimeouts;

GoogleFirebaseAppHostingTrafficTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#create GoogleFirebaseAppHostingTraffic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#delete GoogleFirebaseAppHostingTraffic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#update GoogleFirebaseAppHostingTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#create GoogleFirebaseAppHostingTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#delete GoogleFirebaseAppHostingTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/resources/google_firebase_app_hosting_traffic#update GoogleFirebaseAppHostingTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingTrafficCurrentList <a name="GoogleFirebaseAppHostingTrafficCurrentList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrentList;

new GoogleFirebaseAppHostingTrafficCurrentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseAppHostingTrafficCurrentOutputReference <a name="GoogleFirebaseAppHostingTrafficCurrentOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference;

new GoogleFirebaseAppHostingTrafficCurrentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.splits">splits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList">GoogleFirebaseAppHostingTrafficCurrentSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent">GoogleFirebaseAppHostingTrafficCurrent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.splits"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrentSplitsList getSplits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList">GoogleFirebaseAppHostingTrafficCurrentSplitsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrent">GoogleFirebaseAppHostingTrafficCurrent</a>

---


### GoogleFirebaseAppHostingTrafficCurrentSplitsList <a name="GoogleFirebaseAppHostingTrafficCurrentSplitsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList;

new GoogleFirebaseAppHostingTrafficCurrentSplitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference <a name="GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference;

new GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits">GoogleFirebaseAppHostingTrafficCurrentSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseAppHostingTrafficCurrentSplits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficCurrentSplits">GoogleFirebaseAppHostingTrafficCurrentSplits</a>

---


### GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference <a name="GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference;

new GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch">resetCodebaseBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCodebaseBranch` <a name="resetCodebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch"></a>

```java
public void resetCodebaseBranch()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime">disabledTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput">codebaseBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch">codebaseBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledTime`<sup>Required</sup> <a name="disabledTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime"></a>

```java
public java.lang.String getDisabledTime();
```

- *Type:* java.lang.String

---

##### `codebaseBranchInput`<sup>Optional</sup> <a name="codebaseBranchInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput"></a>

```java
public java.lang.String getCodebaseBranchInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codebaseBranch`<sup>Required</sup> <a name="codebaseBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch"></a>

```java
public java.lang.String getCodebaseBranch();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseAppHostingTrafficRolloutPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficRolloutPolicy">GoogleFirebaseAppHostingTrafficRolloutPolicy</a>

---


### GoogleFirebaseAppHostingTrafficTargetOutputReference <a name="GoogleFirebaseAppHostingTrafficTargetOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTargetOutputReference;

new GoogleFirebaseAppHostingTrafficTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits">putSplits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSplits` <a name="putSplits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits"></a>

```java
public void putSplits(IResolvable OR java.util.List<GoogleFirebaseAppHostingTrafficTargetSplits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.putSplits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splits">splits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList">GoogleFirebaseAppHostingTrafficTargetSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splitsInput">splitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splits"></a>

```java
public GoogleFirebaseAppHostingTrafficTargetSplitsList getSplits();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList">GoogleFirebaseAppHostingTrafficTargetSplitsList</a>

---

##### `splitsInput`<sup>Optional</sup> <a name="splitsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.splitsInput"></a>

```java
public java.lang.Object getSplitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseAppHostingTrafficTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTarget">GoogleFirebaseAppHostingTrafficTarget</a>

---


### GoogleFirebaseAppHostingTrafficTargetSplitsList <a name="GoogleFirebaseAppHostingTrafficTargetSplitsList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTargetSplitsList;

new GoogleFirebaseAppHostingTrafficTargetSplitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get"></a>

```java
public GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>>

---


### GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference <a name="GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference;

new GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput"></a>

```java
public java.lang.String getBuildAttributeInput();
```

- *Type:* java.lang.String

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTargetSplits">GoogleFirebaseAppHostingTrafficTargetSplits</a>

---


### GoogleFirebaseAppHostingTrafficTimeoutsOutputReference <a name="GoogleFirebaseAppHostingTrafficTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_hosting_traffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference;

new GoogleFirebaseAppHostingTrafficTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingTraffic.GoogleFirebaseAppHostingTrafficTimeouts">GoogleFirebaseAppHostingTrafficTimeouts</a>

---



